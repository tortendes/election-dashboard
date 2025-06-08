import ExitPolling from "@/components/static/exit-polling/results";

export default function PepePollingCoExitPolls() {
    return (
        <>
        <header className="bg-[url('/backgrounds/main.webp')] bg-cover min-h-1/3 flex flex-col items-center gap-8 px-8 py-12 w-full">
            <img src="/icons/header-logo.svg" className="md:max-w-1/2" />
            <h1 className="text-3xl font-bold text-white">Exit Poll: Pepe&apos;s Polling Co.</h1>
        </header>
        <div className="flex flex-col md:grid grid-cols-2 gap-2 px-4 py-2">
            <div className="col-span-2">
                <ExitPolling title="Presidential Pick"
                    respondents={17}
                    answers={["First Preference"]}
                    result={[
                        { id: 1,
                            result: [15]
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
                    respondents={17}
                    answers={["WPR", "LfR", "GER", "RRP", "RU", "TP", "IND"]}
                    result={[
                        { id: 1,
                            result: [11,0,0,0,1,1,1]
                        },
                        { id: 2,
                            result: [0,0,1,0,0,0,1]
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
                    respondents={16}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [8,8,0,0]
                        },
                        { id: 2,
                            result: [0,10,5,1]
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
                    respondents={16}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [7,7,1,1]
                        },
                        { id: 2,
                            result: [2,10,2,2]
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
                    respondents={16}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [15,0,1,0]
                        },
                        { id: 2,
                            result: [1,6,8,1]
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
                    respondents={16}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [14,1,1,0]
                        },
                        { id: 2,
                            result: [0,7,8,1]
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
                    respondents={16}
                    answers={["Excellent", "Neutral", "Poor", "N/A"]}
                    result={[
                        { id: 1,
                            result: [14,2,0,0]
                        },
                        { id: 2,
                            result: [0,5,10,1]
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