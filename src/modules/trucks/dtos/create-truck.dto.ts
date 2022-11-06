/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {AutoMap} from '@automapper/classes';
export class CreateTruckDto {
    @AutoMap()
    @ApiProperty({ required: true})
    @IsNotEmpty()
    licensePlateNumber: string;   
}
