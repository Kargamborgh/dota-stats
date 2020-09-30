import { Module } from '@nestjs/common';
import { StatsModule } from './stats/stats.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    StatsModule, 
    MongooseModule.forRoot('mongodb://localhost/dota-stats', { useNewUrlParser: true})],
})
export class AppModule {}
