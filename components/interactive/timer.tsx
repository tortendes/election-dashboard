"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useEffect, useState } from "react";

export default function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            const eventTime = new Date("2025-06-10T00:00:00.000Z").getTime();
            let remainingTime = eventTime - currentTime;

            if (remainingTime <= 0) {
                remainingTime = 0;
                clearInterval(countdownInterval);
                alert("Countdown complete!");
            }

            setTimeRemaining(remainingTime);
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [timeRemaining]);

    const formatTime = (time: number) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return (
        <div className="flex gap-2">
            <div className="flex flex-col gap-0.5 items-center justify-center">
                <span className="font-bold text-5xl">
                    {days.toString().padStart(2, "0")}
                </span>
                <span className="text-xs">days</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center justify-center">
                <span className="font-bold text-5xl">
                    {hours.toString().padStart(2, "0")}
                </span>
                <span className="text-xs">hours</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center justify-center">
                <span className="font-bold text-5xl">
                    {minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-xs">minutes</span>
            </div>
            <div className="flex flex-col gap-0.5 items-center justify-center">
                <span className="font-bold text-5xl">
                    {seconds.toString().padStart(2, "0")}
                </span>
                <span className="text-xs">seconds</span>
            </div>
        </div>
    );
  };

    return (
        <Alert className="grid place-items-center my-2 md:max-w-1/3">
            <AlertTitle className="mb-2 text-white/50">Poll closes at:</AlertTitle>
            <AlertDescription className="text-white">
                {formatTime(timeRemaining)}
            </AlertDescription>
        </Alert>
    )
}