import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Truck } from '../entities/truck.entity';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { RegisteredTruckDto } from '../dtos/registered-truck.dto';
import { CreateTruckDto } from '../dtos/create-truck.dto';

@Injectable()
export class TrucksService {
  constructor(
    @InjectRepository(Truck)
    private readonly trucksRepository: Repository<Truck>,
    private readonly dataSource: DataSource,
    @InjectMapper() private readonly classMapper: Mapper
  ) {}
  async create(createTruckDto: CreateTruckDto): Promise<RegisteredTruckDto | undefined> {
    return this.classMapper.mapAsync(await this.trucksRepository.save(createTruckDto), Truck, RegisteredTruckDto);    
  }  
}

