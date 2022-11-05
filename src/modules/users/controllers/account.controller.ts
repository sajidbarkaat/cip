import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { RegisteredUserDto } from '../dtos/registered-user.dto';
import { UsersService } from '../services/users.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { LocalAuthGuard } from 'src/modules/auth/guards/local-auth.guard';
import { Public } from 'src/modules/auth/decorators/public.decorator';

@Controller('accounts')
@ApiTags('accounts')
export class AccountsController {
  constructor(private readonly userService: UsersService, private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  @ApiOkResponse({ type: RegisteredUserDto})
  async signup(@Body() createUserDto: CreateUserDto): Promise<RegisteredUserDto> {
    return this.userService.create(createUserDto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
