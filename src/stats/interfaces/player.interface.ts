import { Document } from 'mongoose'

export interface Player extends Document {
    readonly account_id: Number,
    readonly personaname: String,
    readonly name: String,
    readonly plus: Boolean,
    readonly cheese: Number,
    readonly steamid: String,
    readonly avatar: String,
    readonly profileurl: String,
    readonly last_login: String,
    readonly loccountrycode: String,
    readonly is_contributor: Boolean
}