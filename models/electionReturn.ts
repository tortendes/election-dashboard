import mongoose, { Schema } from "mongoose";
import { Candidate } from "./candidate";

export interface ElectionReturn extends mongoose.Document {
    total_votes: number;
    processed_votes: number;
    results: { candidate: Candidate, votes: number }[]
    update_time: Date;
}


const ElectionReturnSchema = new mongoose.Schema<ElectionReturn>({
    total_votes: {
        type: Number,
        required: [true, "Total votes for this election is required"]
    },
    processed_votes: {
        type: Number,
        required: [true, "Counted votes for this election is required"]
    },
    results: [{
        candidate: { type: mongoose.Types.ObjectId, ref: "Candidate" },
        votes: { type: Number, required: [true, "Someone must have definitely voted for Bezzer!"] }
    }],
    update_time: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.ElectionReturn || mongoose.model<ElectionReturn>("ElectionReturn", ElectionReturnSchema);