import dbConnect from "@/lib/database";
import candidate from "@/models/candidate";

type CandidateData = {
    name: string,
    party: "WPR" | "GER" | "LfR" | "RRP" | "TP" | "RU" | "IND"
    description: string
    logo?: string
}

type Params = {
    id: string
}

export async function GET(req: Request, { params }: { params: Params }) {
    try {
        const { id } = await params
        const result = await candidate.findById(id)
        return Response.json({ success: true, result }, { status: 200 })
    } catch (error) {
        console.log(error)
        return Response.json({ sucess: false }, { status: 500 })
    }
}