import { Controller, Get, Post, Body, Res, HttpStatus, Param, NotFoundException } from '@nestjs/common';
import { CreateStatDTO } from './dto/create-stat.dto'
import { StatsService } from './stats.service';
import { Stat } from './interfaces/stat.interface'
import { CreatePlayerDTO } from './dto/create-player.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes'

let statNumber: number = 0

@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Post('/stat')
  async addStat(@Res() res, @Body() createStatDTO: CreateStatDTO) {
    const newStat = await this.statsService.addStat(createStatDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Stat has been submitted successfully!',
      stat: newStat,
    });
  }

  @Get('stat/:statID')
  async getStat(@Res() res, @Param('statID', new ValidateObjectId()) statID) {
    const stat = await this.statsService.getStat(statID);
    if (!stat) {
        throw new NotFoundException('Stat does not exist!');
    }
    return res.status(HttpStatus.OK).json(stat);
  }

  // Fetch all posts
  @Get('stats')
  async getStats(@Res() res) {
    const stats = await this.statsService.getStats();
    return res.status(HttpStatus.OK).json(stats);
  }

  }

