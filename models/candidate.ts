import mongoose from "mongoose";

export interface Candidate extends mongoose.Document {
    name: string,
    party: "WPR" | "GER" | "LfR" | "RRP" | "TP" | "RU" | "IND"
    description: string
    logo: string
    creation_date: Date
}

const CandidateSchema = new mongoose.Schema<Candidate>({
    name: {
        type: String,
        required: [true, "A candidate must have a name"]
    },
    party: {
        type: String,
        default: "IND"
    },
    logo: {
        type: String,
        required: [true, "A candidate must have a campaign logo"]
    },
    description: {
        type: String,
        required: [true, "Candidates must have a story of their life, as that One Direction song said."]
    },
    creation_date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.models.Candidate || mongoose.model<Candidate>("Candidate", CandidateSchema);