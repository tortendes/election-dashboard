import { JSX } from "react";
import { Progress } from "../ui/progress";
import Image from 'next/image'
import { Candidate } from "@/models/candidate";

type ElectionResult = {
    object_id: string;
    votes: number,
    total_ballots: number,
}

function getVotePercentages(ballot: number, votes: number): number {
    return Math.floor((ballot*votes)/100)
}

export default async function ElectionResult(props: ElectionResult) {
    const data = await fetch(`http://localhost:3000/api/candidates/${props.object_id}`)
    const { result: candidate } = await data.json()
    return (
        <div className="flex items-center gap-2 w-full">
            <Image src={candidate.logo} alt={`${candidate.name} campaign logo`} className="max-h-24 rounded-xl" width={96} height={96} quality={90} />
            <div className="flex flex-col gap-2 w-full md:min-w-48 not-dark:bg-slate-200 bg-slate-900 rounded-md p-2">
                <div className="grid grid-cols-5 gap-2">
                    <span className="font-bold col-span-3">
                        {candidate.name} <span className="text-xs">({candidate.party})</span>
                    </span>
                    <span>{props.votes}</span>
                    <span>{getVotePercentages(props.total_ballots, props.votes)}%</span>
                </div>
                <Progress value={getVotePercentages(props.total_ballots, props.votes)} className="text-red-600" />
            </div>
        </div>
    )
}