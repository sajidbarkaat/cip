import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AutoMap } from '@automapper/classes';
export class FindUserDto {    

    @AutoMap()
    username: string;

    @AutoMap()
    password: string;
}
