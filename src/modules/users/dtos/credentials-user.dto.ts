/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AutoMap } from '@automapper/classes';
export class CredentialsUserDto {    
    
    @AutoMap()
    @ApiProperty({ required: true})
    @IsNotEmpty()
    username: string;

    @AutoMap()
    @ApiProperty({ required: true})
    @IsNotEmpty()
    password: string;
}
