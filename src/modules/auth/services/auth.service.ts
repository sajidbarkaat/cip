import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FindUserDto } from 'src/modules/users/dtos/find-user.dto';
import { UsersService } from 'src/modules/users/services/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
        private jwtService: JwtService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const findUserDto: FindUserDto = new FindUserDto();
        findUserDto.username = username;

        const user = await this.usersService.findOne(findUserDto);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
