import { Module } from '@nestjs/common'
import { StatsController } from './stats.controller'
import { StatsService } from './stats.service'
import { MongooseModule } from '@nestjs/mongoose'
import { StatSchema } from './schemas/stat.schema'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Stat', schema: StatSchema}]),
    ],
    controllers: [StatsController],
    providers: [StatsService],
})
export class StatsModule{ }