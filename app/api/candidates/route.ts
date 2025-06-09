import { PrismaClient } from "@/generated/prisma/edge"
const prisma = new PrismaClient()

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
        if (!name || !party || !logo) return Response.json({ sucess: false, message: "Invalid parameters" }, { status: 400 })
        const candidate = await prisma.candidate.create({
            data: {
                name,
                party,
                description,
                logo
            }
        })
        return Response.json({ success: true, data: candidate })
    } catch (error) {
        return Response.json(
            { success: false, message: error },
            { status: 401 }
        );
    }
}