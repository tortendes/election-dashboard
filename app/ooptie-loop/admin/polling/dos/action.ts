"use server"
import { PrismaClient } from "@/generated/prisma"
const prisma = new PrismaClient()

type ElectionData = {
  total_votes: number
  processed_votes: number
  results: ElectionResult[]
}

type ElectionResult = {
    candidateId: string;
    votes: number;
}

export async function sendElectionReturn(data: ElectionData) {
    const election_return = await prisma.electionReturn.create({
        data: {
            processed_votes: data.processed_votes,
            total_votes: data.total_votes
        }
    })
    const results = data.results.map(async (item) => {
        return await prisma.electionReturnResult.create({
            data: {
                votes: item.votes,
                candidateId: item.candidateId,
                electionReturnId: election_return.id
            }
        })
    })
    return await prisma.electionReturn.findFirst({
        where: {
            id: election_return.id
        }
    })
}