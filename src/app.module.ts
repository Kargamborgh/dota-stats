import { Module } from '@nestjs/common';
import { StatsController } from './stats/stats.controller';
import { StatsModule } from './stats/stats.module';
import { StatsService } from './stats/stats.service';

@Module({
  imports: [StatsModule],
})
export class AppModule {}
