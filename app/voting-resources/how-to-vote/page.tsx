import Image from 'next/image'

export default function HowToVotePage() {
    return (
        <>
            <header className="bg-[url('/backgrounds/main.webp')] bg-cover min-h-1/3 flex flex-col items-center gap-8 px-8 py-12 w-full">
                <Image src="/icons/header-logo.svg" className="md:max-w-1/2" alt="Redmont Decides next line Election Dashboard" width={1126} height={173} />
                <h1 className="text-3xl md:text-5xl font-bold text-white">How to Vote?</h1>
            </header>
            <div className="grid place-items-center">
                <article className="p-4 max-w-prose grid gap-4">
                    <section>
                        <h1 className="text-3xl font-medium">Voting Requirements</h1>
                        <div className="mt-2">
                            <p>In order to vote, you must have <span className="font-bold">6 hours</span> of total in-game playtime.</p>
                            <p>If you have reached this requirement, congratulations! You just need to do <span className="rounded-md dark bg-slate-800 text-white font-mono px-1 py-0.5">/register-to-vote</span> to become a voter.</p>
                            <p>After you have performed the command, it can take a few hours for your registration to finalize. You can always check your eligibility status by looking into the hologram located at the Department of State building thru <span className="rounded-md dark bg-slate-800 text-white font-mono px-1 py-0.5">/gps polls</span></p>
                        </div>
                    </section>
                    <section>
                        <h1 className="text-3xl font-medium">How to vote (insert candidate here) for Prez!</h1>
                        <div className="mt-2">
                            <p>
                                If you have become a registered voter, you can now interact with Voting Lecterns. Election for each position are indicated on the Lecterns sign.
                            </p>
                            <Image src="https://files.catbox.moe/zfukq9.png" alt="image of a election lectern" width={1280} height={720} className="max-w-full" />
                            <h1 className="text-2xl mt-2">Voting GUI</h1>
                            <Image src="https://files.catbox.moe/h81sfw.webp" alt="image of the voting menu" width={1280} height={720} className="max-w-full" />
                            <p className="mt-2">This is the Voting Menu, this is what shows up after you right click a lectern. For this election, <span className="font-bold">preferential voting</span> is used. Meaning, you select the president you want to elect the most (aka. your first preference) and the second most, so on and so forth.</p>
                            <p>After you have selected your preferences, you can double check your selection. After that, you can click the <span className="font-bold">Nether Star</span> at the bottom of the GUI to confirm your vote. Do note that <span className="font-bold italic">after confirming, your vote is cast and final</span>. So make sure to double-check.</p>
                        </div>
                    </section>
                    <section>
                        <h1 className="text-3xl font-medium">...and you&apos;re done!</h1>
                        <div className="mt-2">
                            <p>Congratulations, You have sucessfully contributed to Democracy! Elections end 3 days after it starts, or you can check our timer at the homepage.</p>
                            <p>For more help about elections and other topics, feel free to ask your fellow players. Don&apos;t worry, we don&apos;t bite :)</p>
                        </div>
                    </section>
                </article>
            </div>
        </>
    )
}