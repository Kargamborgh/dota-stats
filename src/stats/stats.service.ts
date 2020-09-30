import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Player } from './interfaces/player.interface'
import { Stat } from './interfaces/stat.interface'
import { CreatePlayerDTO } from './dto/create-player.dto';

let newStat: Stat = {id: 1, text: 'benis'}
console.log(newStat)

@Injectable()
export class StatsService {
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
  }


  /*private readonly stats: Stat[] = [];

  create(stat: Stat){
    this.stats.push(stat);
  }

  findAll(): Stat[] {
    return this.stats;
  }

  getHello(): string {
    return 'Hello World!';
  }*/
