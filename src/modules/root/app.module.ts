/* eslint-disable prettier/prettier */
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './db.config'; 
import { AutomapperModule } from '@automapper/nestjs';
import {classes} from '@automapper/classes';

@Module({
  imports: [
    TypeOrmModule.forRoot({...dbConfig, autoLoadEntities: true}),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
