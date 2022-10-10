import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './services/jwt.strategy';
import { LocalStrategy } from './services/local.strategy';
import { jwtConstants } from './utilities/constants';

@Global()
@Module({
    imports: [UsersModule, PassportModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '16000s' },
      }),],
    providers: [AuthService, LocalStrategy, JwtStrategy,  {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }],
    exports: [AuthService,  LocalStrategy, JwtStrategy]
})
export class AuthModule {}
