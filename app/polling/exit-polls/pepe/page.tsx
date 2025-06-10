import ExitPolling from "@/components/static/exit-polling/results";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";
import Image from "next/image"
import Link from "next/link";

export default function PepePollingCoExitPolls() {
    return (
        <>
        <header className="bg-[url('/backgrounds/main.webp')] bg-cover min-h-1/3 flex flex-col items-center gap-8 px-8 py-12 w-full">
            <Image src="/icons/header-logo.svg" className="md:max-w-1/2" alt="Redmont Decides next line Election Dashboard" width={1126} height={173} />
            <div className="md:flex md:justify-center">
                <h1 className="text-3xl font-bold text-white">Exit Poll: Pepe&apos;s Polling Co.</h1>
                <h1 className="text-xl font-thin text-white">Last updated at {dayjs("2025-06-10T09:32:56+0000").format("MMMM DD, YYYY h:mm A")}</h1>
            </div>
        </header>
        <div className="flex flex-col md:grid grid-cols-2 gap-2 px-4 py-2">
            <div className="col-span-2">
                <ExitPolling title="Presidential Pick"
                    answers={["First Preference"]}
                    result={[
                        { id: 1,
                            result: [26]
                        },
                        { id: 2,
                            result: [4]
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
            <ExitPolling title="Party Affiliations"
                    answers={["WPR", "LfR", "GER", "RRP", "RU", "TP", "IND", "N/A"]}
                    result={[
                        { id: 1,
                            result: [17,0,1,0,1,1,6,0]
                        },
                        { id: 2,
                            result: [0,1,1,0,0,0,2,0]
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
            <ExitPolling title="International Relations"
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [11,10,4,2]
                        },
                        { id: 2,
                            result: [3,13,9,2]
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
            <ExitPolling title="Economy"
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [16,7,3,1]
                        },
                        { id: 2,
                            result: [3,9,14,1]
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
            <ExitPolling title="National Defence"
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [8,12,5,2]
                        },
                        { id: 2,
                            result: [5,13,7,2]
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
            <ExitPolling title="Job Growth and Protection"
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [21,1,4,1]
                        },
                        { id: 2,
                            result: [4,10,12,1]
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
            <ExitPolling title="Adressing Wealth Inequality"
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [19,4,3,0]
                        },
                        { id: 2,
                            result: [3,9,13,2]
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
            <ExitPolling title="Safeguarding Democracy"
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [18,5,3,1]
                        },
                        { id: 2,
                            result: [3,6,17,1]
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
                <Card className="w-full justify-self-center-safe">
                    <CardHeader>
                        <CardTitle>Make our data more accurate and reliable</CardTitle>
                        <CardDescription>Answer our affiliates polling right now!</CardDescription>
                        <CardContent className="grid w-full h-full place-items-center mt-4">
                            <Button asChild>
                                <a href="https://forms.gle/8TffQb1pXVfEL4y88" target="_blank">Pepe's Exit Poll Survey (Google Form)</a>
                            </Button>
                        </CardContent>
                    </CardHeader>
                </Card>
        </div>
        </>
    )
}