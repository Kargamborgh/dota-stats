import * as mongoose from 'mongoose'

export const StatSchema = new mongoose.Schema({
    id: Number,
    text: String
})