import dbConnect from "@/lib/database";
import ElectionReturn from "@/models/electionReturn";

await dbConnect()

type BallotRequest = {
    total_votes: number
    processed_votes: number
    results: { candidate: string, votes: number }[]
}

export async function GET(req: Request) {
    try {
        const result = await ElectionReturn.findOne({}).sort('-update_time')
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
        const electionReturn = await ElectionReturn.create({
            total_votes,
            processed_votes,
            results
        });
        return Response.json({ success: true, data: electionReturn })
    } catch (error) {
        console.error(error)
        return Response.json(
            { success: false, message: error },
            { status: 400 }
        );
    }
}