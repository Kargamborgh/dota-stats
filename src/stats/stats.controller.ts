import { Controller, Get, Post, Body, Res, HttpStatus, Param, NotFoundException } from '@nestjs/common';
import { CreateStatDto } from './dto/create-stat.dto'
import { StatsService } from './stats.service';
import { Stat } from './interfaces/stat.interface'
import { CreatePlayerDTO } from './dto/create-player.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes'

let statNumber: number = 0

@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  //add new player

  @Post('/player')
  async addPlayer(@Res() res, @Body() createPlayerDTO: CreatePlayerDTO) {
    const newPlayer = await this.statsService.addPlayer(createPlayerDTO)
    return res.status(HttpStatus.OK).json({
      message: 'Player added successfully',
      player: newPlayer
    })
  }

  @Get('/player/:playerID')
  async getPlayer(@Res() res, @Param('playerID', new ValidateObjectId()) playerID) {
    const player = await this.statsService.getPlayer(playerID)
    if (!player) {
      throw new NotFoundException('Player does not exist fool')
    }
    return res.status(HttpStatus.OK).json(player)
  }

  @Get('/players')
  async getPlayers(@Res() res)  {
    const players = await this.statsService.getPlayers()
    return res.status(HttpStatus.OK).json(players)
  }

  }

