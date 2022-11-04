import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsController } from './controllers/account.controller';
import { UsersController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { UsersService } from './services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AccountsController, UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
