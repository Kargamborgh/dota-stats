import * as mongoose from 'mongoose'

// compact version of OpenDota player-specific data, need to parse only this data from the API response

export const PlayerSchema = new mongoose.Schema({
          account_id: Number,
          personaname: String,
          name: String,
          plus: Boolean,
          cheese: Number,
          steamid: String,
          avatar: String,
          profileurl: String,
          last_login: String,
          loccountrycode: String,
          is_contributor: Boolean
})

/*{
  "tracked_until": "string",
  "solo_competitive_rank": "string",
  "competitive_rank": "string",
  "rank_tier": 0,
  "leaderboard_rank": 0,
  "mmr_estimate": {
    "estimate": 0,
    "stdDev": 0,
    "n": 0
  },
  "profile": {
    "account_id": 0,
    "personaname": "string",
    "name": "string",
    "plus": true,
    "cheese": 0,
    "steamid": "string",
    "avatar": "string",
    "avatarmedium": "string",
    "avatarfull": "string",
    "profileurl": "string",
    "last_login": "string",
    "loccountrycode": "string",
    "is_contributor": false
  }
}*/