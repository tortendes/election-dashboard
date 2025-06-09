import ExitPolling from "@/components/static/exit-polling/results";
import Image from "next/image"

export default function PepePollingCoExitPolls() {
    return (
        <>
        <header className="bg-[url('/backgrounds/main.webp')] bg-cover min-h-1/3 flex flex-col items-center gap-8 px-8 py-12 w-full">
            <Image src="/icons/header-logo.svg" className="md:max-w-1/2" alt="Redmont Decides next line Election Dashboard" width={1126} height={173} />
            <h1 className="text-3xl font-bold text-white">Exit Poll: Pepe&apos;s Polling Co.</h1>
        </header>
        <div className="flex flex-col md:grid grid-cols-2 gap-2 px-4 py-2">
            <div className="col-span-2">
                <ExitPolling title="Presidential Pick"
                    respondents={20}
                    answers={["First Preference"]}
                    result={[
                        { id: 1,
                            result: [18]
                        },
                        { id: 2,
                            result: [2]
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
                    respondents={21}
                    answers={["WPR", "LfR", "GER", "RRP", "RU", "TP", "IND"]}
                    result={[
                        { id: 1,
                            result: [12,0,0,0,1,1,3]
                        },
                        { id: 2,
                            result: [0,0,1,0,0,0,2]
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
                    respondents={20}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [9,9,1,0]
                        },
                        { id: 2,
                            result: [1,12,5,1]
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
                    respondents={20}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [14,5,1,0]
                        },
                        { id: 2,
                            result: [1,7,11,1]
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
                    respondents={20}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [8,9,2,1]
                        },
                        { id: 2,
                            result: [3,11,4,2]
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
                    respondents={20}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [17,1,2,0]
                        },
                        { id: 2,
                            result: [2,7,10,1]
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
                    respondents={20}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [16,2,2,0]
                        },
                        { id: 2,
                            result: [1,7,11,1]
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
                    respondents={20}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [15,4,1,0]
                        },
                        { id: 2,
                            result: [1,5,13,1]
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