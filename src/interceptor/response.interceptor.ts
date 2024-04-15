import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const httpContext = context.switchToHttp();
      const response = httpContext.getResponse();
      return next.handle().pipe(
        map((data) => {
          return {
            status: response.statusCode,
            message: data.message,
            data: data.data,
          };
        }),
      );
    }
  }