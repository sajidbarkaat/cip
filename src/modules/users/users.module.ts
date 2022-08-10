import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AccountsController } from './controllers/accounts.controller';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [PrismaModule ],
  controllers: [AccountsController, UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
