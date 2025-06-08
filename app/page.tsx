import ElectionResult from "@/components/interactive/result";
import HomeHero from "@/components/pages/home-hero";
import Timer from "@/components/interactive/timer";


export default async function Home() {
  const data = await fetch('http://localhost:3000/api/polling/dos', { cache: 'no-store' });
  const { raw_data: election_return } = await data.json();

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
