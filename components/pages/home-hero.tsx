import { Progress } from "@/components/ui/progress";
import dayjs from "dayjs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import Image from "next/image"

type ElectionData = {
  total_ballots: number
  processed_votes: number
  update_time: Date
}

export default function HomeHero(props: ElectionData) {
    function getVotePercentages(ballot: number, votes: number): number {
        const calculation = Math.round((((votes/ballot)*100) + Number.EPSILON) * 100) / 100
        return isNaN(calculation) ? 0 : calculation
    }

    return (
      <header className="bg-[url('/backgrounds/main.webp')] bg-cover min-h-1/3 flex flex-col sm:flex-row items-center gap-8 md:gap-0 md:justify-between px-8 py-12 w-full">
        <Image src="/icons/header-logo.svg" className="md:max-w-1/2" alt="Redmont Decides next line Election Dashboard" width={1126} height={173} />
        <Card className="items-center text-center md:min-w-1/3">
          <CardHeader className="flex flex-col items-center text-center w-full">
            <CardTitle>Total Election Results Processed</CardTitle>
            <CardDescription>Last updated {dayjs(props.update_time).format("MMM D, h:mm a")}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4 w-full">
            <h1 className="text-5xl font-black">{getVotePercentages(props.total_ballots, props.processed_votes)}%</h1>
            <Progress className="w-full" value={getVotePercentages(props.total_ballots, props.processed_votes)} indicatorColor="bg-teal-600" />
          </CardContent>
          <CardFooter className="text-sm text-slate-600">
            <p>Source: Department of State</p>
          </CardFooter>
        </Card>
      </header>
    )
}