import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {AutoMap} from '@automapper/classes';

export class RegisteredUserDto {    
    
    @AutoMap()
    id: number;  
    
    @AutoMap()
    username: string;  
    
    @AutoMap()
    isActive: boolean; 
}
