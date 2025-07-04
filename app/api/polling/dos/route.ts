import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

type BallotRequest = {
    total_votes: number
    processed_votes: number
    results: { candidate: string, votes: number }[]
}

export async function GET() {
    try {
        const result = await prisma.electionReturn.findFirst({
            orderBy: {
                update_time: "desc"
            },
            select: {
                results: true,
                update_time: true,
                total_votes: true,
                processed_votes: true
            }
        })
        return Response.json({ success: true, raw_data: result }, { status: 200 })
    } catch (error) {
        console.log(error)
        return Response.json({ sucess: false }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const reqBody = await req.json()
        const { total_votes, processed_votes, results } = reqBody as BallotRequest;

        const election_return = await prisma.electionReturn.create({
            data: {
                total_votes: total_votes,
                processed_votes: processed_votes
            }
        })
        results.forEach(async (results) => {
            await prisma.electionReturnResult.create({
                data: {
                    candidateId: results.candidate,
                    electionReturnId: election_return.id,
                    votes: results.votes
                }
            })
        })
        const resulting_db = await prisma.electionReturn.findFirst({
            where: {
                id: election_return.id
            }
        })
        return Response.json({ success: true, data: resulting_db })
    } catch (error) {
        console.error(error)
        return Response.json(
            { success: false, message: error },
            { status: 400 }
        );
    }
}