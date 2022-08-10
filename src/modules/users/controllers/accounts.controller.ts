import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { RegisteredUserDto } from '../dtos/registered-user.dto';
import { UsersService } from '../services/users.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('accounts')
@ApiTags('accounts')
export class AccountsController {
  constructor(private readonly userService: UsersService) {}

  @Post('signup')
  @ApiOkResponse({ type: RegisteredUserDto})
  async signup(@Body() createUserDto: CreateUserDto): Promise<RegisteredUserDto> {    
    return this.userService.create(createUserDto);    
  }

  @Get('greeting')
  greeting(): string {
    return 'This is a greeting';
  }
}
