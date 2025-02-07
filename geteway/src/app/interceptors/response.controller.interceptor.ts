import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map, timestamp } from 'rxjs/operators'
import { Response } from 'express'



@Injectable()
export class ResponseControllerInterceptor implements NestInterceptor
{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>
    {
        const ctx = context.switchToHttp().getResponse<Response>()
        const statusCode = ctx.statusCode

        return next.handle().pipe(
            map((data) =>
            {
                if (data && data.data !== undefined)
                {
                    return {
                        status:'success',
                        statusCode: statusCode,
                        timestamp: Date.now(),
                        data: data.data,
                    }
                }

                return {
                    status:'success',
                    statusCode: statusCode,
                    timestamp: Date.now(),
                    data: data,
                }
            }),
        )
    }
}
