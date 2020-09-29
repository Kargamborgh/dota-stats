import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateStatDto } from './dto/create-stat.dto'
import { StatsService } from './stats.service';
import { Stat } from './interfaces/stat.interface'

let statNumber: number = 0

@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Get('hello')
  getHello(): string {
    return this.statsService.getHello();
  }

  @Post('')
  async create(@Body() createStatDto: CreateStatDto) {
    this.statsService.create(createStatDto)
  }

  @Get('')
  async findAll(): Promise<Stat[]> {
    return this.statsService.findAll();
  }
}
