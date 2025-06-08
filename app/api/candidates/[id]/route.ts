import dbConnect from "@/lib/database";
import candidate from "@/models/candidate";

await dbConnect();

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        const result = await candidate.findById(id)
        return Response.json({ success: true, result }, { status: 200 })
    } catch (error) {
        console.log(error)
        return Response.json({ sucess: false }, { status: 500 })
    }
}