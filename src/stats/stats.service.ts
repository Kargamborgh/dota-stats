import { Injectable } from '@nestjs/common';
import { Stat } from './interfaces/stat.interface'

let newStat: Stat = {id: 1, text: 'benis'}
console.log(newStat)

@Injectable()
export class StatsService {
  private readonly stats: Stat[] = [];

  create(stat: Stat){
    this.stats.push(stat);
  }

  findAll(): Stat[] {
    return this.stats;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
