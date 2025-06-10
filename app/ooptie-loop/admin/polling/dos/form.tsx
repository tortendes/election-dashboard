"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"

type ElectionData = {
  total_votes: number
  processed_votes: number
  results: ElectionResult[]
}

type ElectionResult = {
    candidate: Candidate;
    votes: number;
}


const candidateSchema = z.object({
    candidateId: z.string(),
    votes: z.coerce.number()
})

const schema = z.object({
    total_votes: z.coerce.number(),
    processed_votes: z.coerce.number(),
    results: z.array(candidateSchema)
})


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Candidate } from "@/generated/prisma"
import { sendElectionReturn } from "./action"

export function ElectionReturnForm(props: ElectionData) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      processed_votes: props.processed_votes,
      total_votes: props.total_votes,
      results: props.results?.map((item) => {
        return {
            candidateId: item.candidate.id,
            votes: item.votes
        }
      })
    },
  })

  function onSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    sendElectionReturn(values)
    toast("Results updated successfully.")
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
                control={form.control}
                name="total_votes"
                render={({ field, fieldState }) => (
                    <FormItem>
                        <FormLabel>Total Votes</FormLabel>
                        <FormControl>
                            <Input type="number" inputMode="numeric" placeholder="197" {...field} />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                        <FormDescription>Total number of ballots recieved by the Department of State</FormDescription>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="processed_votes"
                render={({ field, fieldState }) => (
                    <FormItem>
                        <FormLabel>Processed Votes</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="20" step={10} {...field} />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                        <FormDescription>Total number of ballots counted and validated by the Department of State</FormDescription>
                    </FormItem>
                )}
            />
            {props.results?.map((result, index) => {
                return (
                    <Card key={index}>
                        <CardHeader className="flex gap-4">
                            <Image src={result.candidate.logo} alt={`${result.candidate.name} campaign logo`} className="max-h-24 rounded-xl" width={96} height={96} quality={90} />
                            <div>
                                <CardTitle>{result.candidate.name} ({result.candidate.party})</CardTitle>
                                <CardDescription>{result.candidate.description}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <FormField 
                                control={form.control}
                                name={`results.${index}.votes`}
                                render={({ field, fieldState }) => (
                                    <FormItem>
                                        <FormLabel>Candidates Votes</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage>{fieldState.error?.message}</FormMessage>
                                        <FormDescription>Total number of votes cast to {result.candidate.name}</FormDescription>
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>
                )
            })}
            <Button type="submit" className="w-full">Submit</Button>
        </form>
    </Form>
  )
}