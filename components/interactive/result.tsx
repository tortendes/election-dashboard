import { Progress } from "../ui/progress";
import { PrismaClient } from "@/generated/prisma"
import Image from 'next/image'

const prisma = new PrismaClient()

type ElectionResult = {
    object_id: string;
    votes: number,
    total_ballots: number,
}

function getVotePercentages(ballot: number, votes: number): number {
    const calculation = Math.round((((votes/ballot)*100) + Number.EPSILON) * 100) / 100
    return isNaN(calculation) ? 0 : calculation
}

export default async function ElectionResult(props: ElectionResult) {
    const candidate = await prisma.candidate.findFirst({
        where: {
            id: props.object_id
        }
    })

    if (!candidate) {
        return (
            <div className="flex flex-col gap-2 w-full md:min-w-48 not-dark:bg-slate-200 bg-slate-900 rounded-md p-2">
                <span className="font-bold col-span-3">
                    Candidate did not load properly.
                </span>
            </div>
        )
    }

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