"use client"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Dot } from "lucide-react"
import { useState } from "react"

type PollingData = {
    candidates: CandidateInfo[]
    answers: string[]
    result: PollingResult[]
    title: string
    respondents?: number
    match_count?: boolean
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
    const [viewCount, setViewCount] = useState(false)

    function estimateRespondentCount() {
        const resp_count = props.result.map((i) => {
            return i.result.reduce((prev, curr) => prev + curr, 0)
        })
        if (resp_count.length == 2 && resp_count.every(val => val === resp_count[0])) return resp_count[0]
        else if (resp_count.length == 2 && !resp_count.every(val => val === resp_count[0])) return resp_count.reduce((p,c) => p + c,0)
    }

    const resp_count = estimateRespondentCount()

    if (!resp_count) {
        return (
            <Card className="w-full grid place-items-center">
                <CardHeader className="w-full">
                    <CardTitle className="md:text-3xl font-black">Invalid data</CardTitle>
                    <CardDescription className="md:text-lg font-medium">This category has invalid data passed onto it. Please raise the issue with @torten.png on Discord immediately.</CardDescription>
                </CardHeader>
            </Card>
        )
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="md:text-3xl font-black">{props.title}</CardTitle>
                <CardDescription className="md:text-lg font-medium">{resp_count} total respondents</CardDescription>
                <CardAction>
                        <div className="flex items-center space-x-2">
                            <Switch id="view-count" checked={viewCount} onCheckedChange={setViewCount} />
                            <Label htmlFor="view-count">View Count</Label>
                        </div>
                </CardAction>
            </CardHeader>
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
                                        if (viewCount) {
                                            return (
                                                <TableCell key={idr}>{result}</TableCell>
                                            )
                                        } else return (
                                            <TableCell key={idr}>{Math.round((result/resp_count)*100)}%</TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}