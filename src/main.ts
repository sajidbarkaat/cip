import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './modules/root/app.module';
import { HttpExceptionFilter } from './modules/root/filter/http-exception.filter';
import { RolesGuard } from './modules/root/guard/roles.guard';
import { LoggingInterceptor } from './modules/root/interceptor/logging.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(new Reflector()));
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.useGlobalPipes(new ValidationPipe({transform: true}));  
  app.useGlobalFilters(new HttpExceptionFilter());  

  const config = new DocumentBuilder()
    .setTitle('CIP')
    .setDescription('The CIP API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
