import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Player } from '../interfaces/player.interface'
import { CreatePlayerDTO } from '../dto/create-player.dto';

@Injectable()
export class PlayerService {
  constructor(@InjectModel('Player') private readonly playerModel: Model<Player>) {}

    async addPlayer(createPlayerDTO: CreatePlayerDTO): Promise<Player> {
      const newPlayer = await this.playerModel(createPlayerDTO);
      return newPlayer.save();
    }
    
    async getPlayer(playerID): Promise<Player>{
      const player = await this.playerModel.findById(playerID).exec()
      return player
    }

    async getPlayers(): Promise<Player[]> {
      const players = await this.playerModel.find().exec()
      return players
    }

    async editPlayer(playerID, createPlayerDTO: CreatePlayerDTO): Promise<Player> {
      const editedPlayer = await this.playerModel
        .findByIdAndUpdate(playerID, createPlayerDTO, { new: true})
      return editedPlayer
    }

    async deletePlayer(playerID): Promise<any> {
      const deletedPlayer = await this.playerModel.findByIdAndRemove(playerID)
      return deletedPlayer
    }
  }