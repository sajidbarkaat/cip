import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
     const ctx = host.switchToHttp();
     const response = ctx.getResponse<Response>();
    // const request = ctx.getRequest<Request>();
    // const status = exception.getStatus();
    // const message = response["message"] && response["message"].toString();
    
    // response
    //   .status(status)
    //   .json({
    //     statusCode: status,
    //     timestamp: new Date().toISOString(),
    //     path: request.url,
    //     message: message
    //   });

        
    response
      .status(500)
      .json({
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: 'url',
        message: 'this is test message'
      });
  }
}