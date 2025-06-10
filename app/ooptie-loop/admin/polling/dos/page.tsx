import { Form } from "@/components/ui/form";
import { ElectionReturn, PrismaClient } from "@/generated/prisma";
import { ElectionReturnForm } from "./form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const prisma = new PrismaClient()

export default async function UpdatePolling() {
    const latest_return = await prisma.electionReturn.findFirst({
        orderBy: {
            update_time: "desc"
        },
        select: {
            processed_votes: true,
            total_votes: true,
            results: {
                select: {
                    votes: true,
                    candidate: true
                }
            },
            update_time: true
        }
    })

    if (!latest_return) return <div>Nada</div>

    return (
        <>
            <main className="grid place-items-center">
                <Card className="w-fit">
                    <CardHeader>
                        <CardTitle>
                            Push DOS Election Return
                        </CardTitle>
                        <CardDescription>
                            Update the current data shown in the main dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ElectionReturnForm
                            processed_votes={latest_return?.processed_votes}
                            total_votes={latest_return.total_votes}
                            results={latest_return.results}
                        />
                    </CardContent>
                </Card>
            </main>
        </>
    )
}