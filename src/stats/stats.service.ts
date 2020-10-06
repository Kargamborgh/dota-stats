import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Stat } from './interfaces/stat.interface'
import { CreateStatDTO } from './dto/create-stat.dto'

let newStat: Stat = {id: 1, text: 'benis'}
console.log(newStat)

@Injectable()
export class StatsService {
  constructor(@InjectModel('Stat') private readonly statModel: Model<Stat>) {}

    async addStat(createStatDTO: CreateStatDTO): Promise<Stat> {
      const newStat = await this.statModel(createStatDTO);
      return newStat.save();
    }
    
    async getStat(statID): Promise<Stat>{
      const stat = await this.statModel.findById(statID).exec()
      return stat
    }

    async getStats(): Promise<Stat[]> {
      const stats = await this.statModel.find().exec()
      return stats
    }

    async editStat(statID, createStatDTO: CreateStatDTO): Promise<Stat> {
      const editedStat = await this.statModel
        .findByIdAndUpdate(statID, createStatDTO, { new: true})
      return editedStat
    }

    async deleteStat(statID): Promise<any> {
      const deletedStat = await this.statModel.findByIdAndRemove(statID)
      return deletedStat
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
