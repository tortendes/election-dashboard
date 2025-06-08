// -------------------------------
// Helper: Rounding
// -------------------------------
function roundTo5(num: number): number {
    return Math.round(num * 1e5) / 1e5;
}

// -------------------------------
// Data Structures & Types
// -------------------------------

export type CandidateStatus = 'active' | 'elected' | 'eliminated';

export interface CandidateData {
    status: CandidateStatus;
    votes: number;
    ballots: Ballot[];
}

export type CandidatesMap = Map<string, CandidateData>;
export type CandidateHistoryMap = Map<string, number[]>;

export class Ballot {
    preferences: string[];
    weight: number;
    currentIndex: number;

    constructor(preferences: string[], weight: number = 1.0) {
        this.preferences = preferences.map(pref => pref.trim()).filter(p => p); // Ensure no empty strings
        this.weight = roundTo5(weight);
        this.currentIndex = 0;
        if (this.preferences.length === 0) {
            // This might happen if input preferences were like [",", " "]
            // Consider throwing an error or logging if preferences array becomes empty after trim/filter
            // For now, it means the ballot is immediately exhausted.
        }
    }

    getCurrentCandidate(candidatesStatus: Map<string, CandidateStatus>): string | null {
        while (this.currentIndex < this.preferences.length) {
            const candidate = this.preferences[this.currentIndex];
            if ((candidatesStatus.get(candidate) || 'active') === 'active') {
                return candidate;
            } else {
                this.currentIndex += 1;
            }
        }
        return null; // ballot exhausted
    }
}

export interface STVElectionLogEntry {
    type: 'info' | 'round_start' | 'votes' | 'elected' | 'surplus' | 'eliminated' | 'tie_break' | 'default_elected' | 'final_summary' | 'warning';
    message: string;
    details?: any;
}


export interface STVElectionResult {
    electedCandidates: string[];
    eliminatedCandidates: string[];
    log: STVElectionLogEntry[];
    threshold: number;
    totalInitialWeight: number;
    seats: number;
    rounds: number;
}

// -------------------------------
// STV Election Function
// -------------------------------
export function stvElection(
    initialBallots: Ballot[],
    seats: number
): STVElectionResult {
    const electionLog: STVElectionLogEntry[] = [];
    
    const ballots: Ballot[] = initialBallots.map(b => new Ballot([...b.preferences], b.weight));


    const candidateSet = new Set<string>();
    for (const ballot of ballots) {
        for (const pref of ballot.preferences) {
            candidateSet.add(pref);
        }
    }
    if (candidateSet.size === 0) {
        electionLog.push({type: 'warning', message: "No candidates found on any ballots."});
        return {
            electedCandidates: [],
            eliminatedCandidates: [],
            log: electionLog,
            threshold: 0,
            totalInitialWeight: 0,
            seats,
            rounds: 0,
        };
    }


    const candidates: CandidatesMap = new Map();
    candidateSet.forEach(cand => {
        candidates.set(cand, {
            status: 'active',
            votes: 0.0,
            ballots: []
        });
    });

    const candidateHistory: CandidateHistoryMap = new Map();
    candidateSet.forEach(cand => candidateHistory.set(cand, []));

    let totalInitialWeight = 0;
    ballots.forEach(b => totalInitialWeight += b.weight);
    totalInitialWeight = roundTo5(totalInitialWeight);
    
    const threshold = roundTo5(totalInitialWeight / (seats + 1));

    electionLog.push({ type: 'info', message: `Total initial ballot weight: ${totalInitialWeight}` });
    electionLog.push({ type: 'info', message: `Seats to fill: ${seats}` });
    electionLog.push({ type: 'info', message: `Election threshold (Droop): ${threshold}. Candidates need >= this value.` });
    if (totalInitialWeight === 0 && seats > 0) {
        electionLog.push({ type: 'warning', message: "Total ballot weight is zero. No one can be elected." });
    }


    const electedCandidates: string[] = [];
    const eliminatedCandidates: string[] = [];
    let roundNum = 0;

    let activeBallots: Ballot[] = [...ballots]; // Operate on a shallow copy of the (potentially cloned) ballots array

    while (electedCandidates.length < seats && Array.from(candidates.values()).some(c => c.status === 'active')) {
        roundNum += 1;
        electionLog.push({ type: 'round_start', message: `\n----- Round ${roundNum} -----` });

        // Reset votes and ballot lists for active candidates
        candidates.forEach((data) => {
            if (data.status === 'active') {
                data.votes = 0.0;
                data.ballots = [];
            }
        });

        const currentCandidatesStatusMap = new Map<string, CandidateStatus>();
        candidates.forEach((data, name) => currentCandidatesStatusMap.set(name, data.status));

        const nextActiveBallotsInRound: Ballot[] = [];
        for (const ballot of activeBallots) {
            // Reset currentIndex for re-evaluation if the ballot object is reused across calls or for getCurrentCandidate.
            // No, Ballot object state (currentIndex, weight) must persist through rounds.
            const currentPrefCandidate = ballot.getCurrentCandidate(currentCandidatesStatusMap);
            if (currentPrefCandidate) {
                const candData = candidates.get(currentPrefCandidate)!;
                candData.votes = roundTo5(candData.votes + ballot.weight);
                candData.ballots.push(ballot);
                nextActiveBallotsInRound.push(ballot); // Keep ballot if it has a current candidate
            }
        }
        activeBallots = nextActiveBallotsInRound;


        // Record history
        candidates.forEach((data, cand) => {
            const history = candidateHistory.get(cand)!;
            if (data.status === 'active') {
                history.push(data.votes);
            } else {
                // For non-active (elected/eliminated), record 0 or a special marker.
                history.push(0.0);
            }
        });

        // Log current vote counts
        const currentVotesLog: { candidate: string, votes: number, status: CandidateStatus }[] = [];
        candidates.forEach((data, cand) => {
            if (data.status !== 'eliminated') {
                currentVotesLog.push({ candidate: cand, votes: roundTo5(data.votes), status: data.status });
            }
        });
        electionLog.push({ type: 'votes', message: "Current vote counts:", details: currentVotesLog });


        // --- Elect candidates meeting threshold ---
        // Process in descending order of votes for consistent surplus distribution order
        const electableThisRound = Array.from(candidates.entries())
            .filter(([_, data]) => data.status === 'active' && data.votes >= threshold)
            .sort(([, aData], [, bData]) => bData.votes - aData.votes) // Primary sort: higher votes first
            .map(([name]) => name);

        let newElectionsThisRound = false;
        for (const candName of electableThisRound) {
            if (electedCandidates.length < seats) {
                // Re-check status as it might change if multiple candidates elected in one pass
                const candData = candidates.get(candName)!;
                if (candData.status === 'active') { // Ensure not already processed (e.g. by default election)
                    candData.status = 'elected';
                    electedCandidates.push(candName);
                    newElectionsThisRound = true;
                    electionLog.push({ type: 'elected', message: `Candidate '${candName}' elected with ${roundTo5(candData.votes)} votes.` });

                    if (candData.votes > threshold) {
                        const surplus = roundTo5(candData.votes - threshold);
                        const transferValue = candData.votes > 0 ? roundTo5(surplus / candData.votes) : 0;

                        if (transferValue > 0 && surplus > 1e-6) { // Only transfer if meaningful
                            electionLog.push({
                                type: 'surplus',
                                message: `Transferring surplus of ${surplus} from '${candName}' (transfer value: ${transferValue}).`
                            });

                            const ballotsFromElected = [...candData.ballots]; // Ballots that contributed to this candidate
                            activeBallots = activeBallots.filter(b => !ballotsFromElected.includes(b)); // Remove them from general pool

                            const reweightedToAdd: Ballot[] = [];
                            for (const ballot of ballotsFromElected) {
                                const newWeight = roundTo5(ballot.weight * transferValue);
                                if (newWeight > 1e-6) { // Avoid negligible weights
                                    ballot.weight = newWeight;
                                    ballot.currentIndex += 1; // Move to next preference
                                    reweightedToAdd.push(ballot);
                                }
                            }
                            activeBallots.push(...reweightedToAdd); // Add re-weighted ballots back
                        } else {
                            electionLog.push({ type: 'info', message: `Surplus for ${candName} is negligible or zero, no transfer.` });
                        }
                    }
                }
            }
            if (electedCandidates.length === seats) break;
        }

        if (electedCandidates.length === seats) break;

        // --- Automatic election if remaining active candidates match remaining seats ---
        const activeCandidatesNow = Array.from(candidates.entries())
            .filter(([_, data]) => data.status === 'active')
            .map(([name, _]) => name);
        const remainingSeats = seats - electedCandidates.length;

        if (activeCandidatesNow.length > 0 && activeCandidatesNow.length === remainingSeats) {
            electionLog.push({ type: 'info', message: `Remaining ${activeCandidatesNow.length} active candidates match ${remainingSeats} remaining seats. Electing all.` });
            for (const candName of activeCandidatesNow) {
                if (electedCandidates.length < seats) { // Should always be true here
                    candidates.get(candName)!.status = 'elected';
                    electedCandidates.push(candName);
                    newElectionsThisRound = true; // Considered an election event
                    electionLog.push({ type: 'default_elected', message: `Candidate '${candName}' elected by default.` });
                }
            }
            if (electedCandidates.length === seats) break;
        }


        // --- Elimination if no new elections and seats remain ---
        if (!newElectionsThisRound && electedCandidates.length < seats) {
            const candidatesForElimination = Array.from(candidates.entries())
                .filter(([_, data]) => data.status === 'active')
                .map(([name, _]) => name);

            if (candidatesForElimination.length === 0) {
                electionLog.push({ type: 'warning', message: "No active candidates left to eliminate, but seats remain unfilled." });
                break; // No one to eliminate
            }

            let minVotes = Infinity;
            candidatesForElimination.forEach(cName => minVotes = Math.min(minVotes, candidates.get(cName)!.votes));

            let tiedForElimination = candidatesForElimination.filter(cName =>
                roundTo5(candidates.get(cName)!.votes) === roundTo5(minVotes)
            );

            let eliminatedCandidateName: string;

            if (tiedForElimination.length > 1) {
                electionLog.push({
                    type: 'tie_break',
                    message: `Tie for elimination at ${roundTo5(minVotes)} votes among: ${tiedForElimination.join(', ')}. Checking history.`
                });
                // Tie-breaking using previous round votes (lowest past vote is eliminated first)
                for (let prevRoundIdx = roundNum - 2; prevRoundIdx >= 0; prevRoundIdx--) {
                    if (tiedForElimination.length === 1) break;
                    const votesInRound = tiedForElimination.map(cName => candidateHistory.get(cName)![prevRoundIdx]);
                    const minVoteInPastRound = Math.min(...votesInRound);
                    const stillTied = tiedForElimination.filter((cName, idx) => votesInRound[idx] === minVoteInPastRound);
                    if (stillTied.length < tiedForElimination.length) {
                        electionLog.push({ type: 'tie_break', message: `Tie reduced based on round ${prevRoundIdx + 1} votes. Now considering: ${stillTied.join(', ')}` });
                    }
                    tiedForElimination = stillTied;
                }

                if (tiedForElimination.length > 1) {
                    // If still tied, random choice
                    eliminatedCandidateName = tiedForElimination[Math.floor(Math.random() * tiedForElimination.length)];
                    electionLog.push({
                        type: 'tie_break',
                        message: `Tie persists among ${tiedForElimination.join(', ')}. Randomly eliminating '${eliminatedCandidateName}'.`
                    });
                } else {
                    eliminatedCandidateName = tiedForElimination[0];
                    electionLog.push({ type: 'tie_break', message: `Tie broken by history, eliminating '${eliminatedCandidateName}'.` });
                }
            } else {
                eliminatedCandidateName = tiedForElimination[0];
            }

            const elimCandData = candidates.get(eliminatedCandidateName)!;
            elimCandData.status = 'eliminated';
            eliminatedCandidates.push(eliminatedCandidateName);
            electionLog.push({
                type: 'eliminated',
                message: `Candidate '${eliminatedCandidateName}' eliminated with ${roundTo5(elimCandData.votes)} votes.`
            });

            // Redistribute ballots of eliminated candidate
            const ballotsFromEliminated = [...elimCandData.ballots];
            activeBallots = activeBallots.filter(b => !ballotsFromEliminated.includes(b)); // Remove from general pool

            const toReAdd: Ballot[] = [];
            for (const ballot of ballotsFromEliminated) {
                // Weight is NOT changed on elimination transfer
                ballot.currentIndex += 1; // Move to next preference
                toReAdd.push(ballot);
            }
            activeBallots.push(...toReAdd);
        }

        // Filter activeBallots for next round: remove exhausted ballots
        const currentStatusesEndRound = new Map<string, CandidateStatus>();
        candidates.forEach((data, name) => currentStatusesEndRound.set(name, data.status));
        activeBallots = activeBallots.filter(b => b.getCurrentCandidate(currentStatusesEndRound) !== null);

        if (activeBallots.length === 0 && electedCandidates.length < seats && Array.from(candidates.values()).some(c => c.status === 'active')) {
            electionLog.push({ type: 'warning', message: "All ballots are exhausted, but seats remain unfilled and active candidates exist. This may indicate an issue or all remaining votes are non-transferable." });
            break;
        }
    } // End while loop

    electionLog.push({ type: 'final_summary', message: "\n===== Final Results =====" });
    electionLog.push({ type: 'final_summary', message: "Elected candidates (in order of election):", details: electedCandidates });
    if (eliminatedCandidates.length > 0) {
        electionLog.push({ type: 'final_summary', message: "Eliminated candidates (in order of elimination):", details: eliminatedCandidates });
    }

    if (electedCandidates.length < seats) {
        const activeCandsLeft = Array.from(candidates.entries())
            .filter(([_, data]) => data.status === 'active')
            .map(([name, _]) => name);
        electionLog.push({
            type: 'warning',
            message: `Warning: Only ${electedCandidates.length} of ${seats} seats were filled.`,
            details: activeCandsLeft.length > 0 ? `Remaining active candidates: ${activeCandsLeft.join(', ')}` : "No active candidates remaining."
        });
    }

    return {
        electedCandidates,
        eliminatedCandidates,
        log: electionLog,
        threshold,
        totalInitialWeight,
        seats,
        rounds: roundNum
    };
}