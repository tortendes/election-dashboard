import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Dot } from "lucide-react"

type PollingData = {
    candidates: CandidateInfo[]
    answers: string[]
    result: PollingResult[]
    title: string
    respondents?: number
    match_count: boolean
}

type PollingResult = {
    id: number
    result: number[]
}

type CandidateInfo = {
    name: string;
    color: string;
}

export default function ExitPolling(props: PollingData) {
    function estimateRespondentCount() {
        const resp_count = props.result.map((i) => {
            return i.result.reduce((prev, curr) => prev + curr, 0)
        })
        if (resp_count.length == 2 && resp_count.every(val => val === resp_count[0])) return resp_count[0]
        else if (resp_count.length == 2 && !resp_count.every(val => val === resp_count[0])) return resp_count.reduce((p,c) => p + c,0)
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="md:text-3xl font-black">{props.title}</CardTitle>
                <CardDescription className="md:text-lg font-medium">{estimateRespondentCount()} total respondents</CardDescription>
                <CardContent className="overflow-x-scroll">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead></TableHead>
                                {props.answers.map((element, idx) => (
                                    <TableHead key={idx}>{element}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {props.candidates.map((candidate, idx) => {
                                return (
                                    <TableRow key={idx}>
                                        <TableCell className="flex items-center gap-0.5" key={idx}>
                                            <Dot color={candidate.color} />
                                            <span>{candidate.name}</span>
                                        </TableCell>
                                        {props.result[idx].result.map((result, idr) => {
                                            return (
                                                <TableCell key={idr}>{Math.round((result/props.respondents)*100)}%</TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </CardHeader>
        </Card>
    )
}