import { Controller } from '@nestjs/common'
import { CreatePlayerDTO } from '../dto/create-player.dto'
import { Player } from '../interfaces/player.interface'
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes'
import { PlayerService } from '../player/player.service'

@Controller('player')
export class PlayerController {
    constructor(private playerService: PlayerService) {}

}