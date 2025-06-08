import dbConnect from "@/lib/database";
import candidate from "@/models/candidate";

await dbConnect()

type CandidateData = {
    name: string,
    party: "WPR" | "GER" | "LfR" | "RRP" | "TP" | "RU" | "IND"
    description: string
    logo?: string
}

export async function POST(req: Request) {
    try {
        const reqBody = await req.json()
        const { name, party, description, logo } = reqBody as CandidateData;
        const electionReturn = await candidate.create({
            name,
            party,
            description,
            logo
        });
        return Response.json({ success: true, data: electionReturn })
    } catch (error) {
        return Response.json(
            { success: false, message: error },
            { status: 401 }
        );
    }
}