import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TrucksService } from '../services/trucks.service';
import { CreateTruckDto } from '../dtos/create-truck.dto'
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('trucks')
@ApiTags('trucks')
export class TrucksController {
  constructor(private readonly trucksService: TrucksService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTruckDto: CreateTruckDto) {
    return this.trucksService.create(createTruckDto);
  }  
}
