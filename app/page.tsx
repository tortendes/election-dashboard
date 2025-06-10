import ElectionResult from "@/components/interactive/result";
import HomeHero from "@/components/pages/home-hero";
import Timer from "@/components/interactive/timer";
import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

export const revalidate = 60 // revalidate the data at most every hour

export default async function Home() {
  const result = await prisma.electionReturn.findFirst({
    orderBy: {
      update_time: "desc"
    },
    select: {
      results: {
        select: {
          candidateId: true,
          votes: true
        }
      },
      update_time: true,
      total_votes: true,
      processed_votes: true
    }
  })

  if (!result) {
    return (
      <>
        <p>no data yet</p>
      </>
    )
  }

  return (
    <main className="h-full font-sans">
      <HomeHero total_ballots={result.total_votes} processed_votes={result.processed_votes} update_time={result.update_time} />
      <div className="px-2 py-4">
        <section className="grid md:grid-cols-2 gap-4">
          <div className="w-full">
            <Timer />
            <div className="aspect-video">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/n2qum7uhSes?si=BYDEjWVZo-H-Ndhg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Presidential Results</h1>
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              { result.results.map(({ candidateId, votes }: { candidateId: string, votes: number }, idx: number) => {
                return <ElectionResult object_id={candidateId} total_ballots={result.total_votes} votes={votes} key={idx} />
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
