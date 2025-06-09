import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        return Response.json({ success: true, result }, { status: 200 })
    } catch (error) {
        console.log(error)
        return Response.json({ sucess: false }, { status: 500 })
    }
}