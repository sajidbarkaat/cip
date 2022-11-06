import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {AutoMap} from '@automapper/classes';

export class RegisteredTruckDto {    
    
    @AutoMap()
    id: number;  
    
    @AutoMap()
    licensePlateNumber: string;  
    
    @AutoMap()
    isActive: boolean; 
}
