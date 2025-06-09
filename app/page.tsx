import ElectionResult from "@/components/interactive/result";
import HomeHero from "@/components/pages/home-hero";
import Timer from "@/components/interactive/timer";
import dbConnect from "@/lib/database";
import ElectionReturn from "@/models/electionReturn"


export default async function Home() {
  async function getElectionReturn() {
    "use server"
    await dbConnect()
    return await ElectionReturn.findOne({}).sort('-update_time')
    const revalidate = 10
  }

  const election_return = await getElectionReturn()

  return (
    <main className="h-full font-sans">
      <HomeHero total_ballots={election_return.total_votes} processed_votes={election_return.processed_votes} />
      <div className="px-2 py-4">
        <div className="w-full grid place-items-center">
          <Timer />
        </div>
        <section>
          <h1 className="text-3xl font-bold mb-2">Presidential Results</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
            { election_return.results.map(({ candidate, votes }: { candidate: string, votes: number }, idx: number) => {
              return <ElectionResult object_id={candidate} total_ballots={election_return.total_votes} votes={votes} key={idx} />
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
