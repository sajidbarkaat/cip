import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindUserDto {    
    username: string;
    password: string;
}
