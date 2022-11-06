import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrucksController } from './controllers/trucks.controller';
import { Truck } from './entities/truck.entity';
import { TrucksMapperProfile } from './mapper-profiles/trucks-mapper.profile';
import { TrucksService } from './services/trucks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Truck])],
  controllers: [TrucksController],
  providers: [TrucksService, TrucksMapperProfile],
  exports: [TrucksService]
})
export class TrucksModule {}
