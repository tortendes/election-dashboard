import ExitPolling from "@/components/static/exit-polling/results";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";
import Image from "next/image"

export default function PepePollingCoExitPolls() {
    return (
        <>
        <header className="bg-[url('/backgrounds/main.webp')] bg-cover min-h-1/3 flex flex-col items-center gap-8 px-8 py-12 w-full">
            <Image src="/icons/header-logo.svg" className="md:max-w-1/2" alt="Redmont Decides next line Election Dashboard" width={1126} height={173} />
            <div className="md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl font-bold text-white">Opinion Poll: Pepe&apos;s Polling Co.</h1>
            </div>
        </header>
        <div className="flex flex-col md:grid grid-cols-2 gap-2 px-4 py-2">
            <section className="py-2 px-4">
                <h1 className="text-3xl font-bold">Disclaimer</h1>
                <p>This is an oversimplification of the opinion poll, and only includes the first preference votes of tickets validated by the Department of State.
                    For the detailed opinion poll result by our affiliate, please click <a href="https://docs.google.com/document/d/17GBjKkGF3LYOUMACv1TGamsLT0gFhGd1EGcCt_NxCls/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline hover:underline-offset-2">this link</a>.</p>
            </section>
            <ExitPolling title="Presidential Pick"
                answers={["First Preference"]}
                result={[
                    { id: 1,
                        result: [39]
                    },
                    { id: 2,
                        result: [5]
                    }
                ]}
                candidates={
                    [
                        {
                            name: "Kaiserin",
                            color: "red"
                        },
                        {
                            name: "Bezzergeezer",
                            color: "blue"
                        }
                    ]
                }
            />
        </div>
        </>
    )
}
