import { Response } from 'express'
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter
{
    catch(exception: HttpException, host: ArgumentsHost)
    {
        const context = host.switchToHttp()
        const response = context.getResponse<Response>()   // Response
        // const request = context.getRequest<Request>();      // Request
        const status = exception.getStatus()

        const responseData = exception.getResponse()
        let message: string | string[] | object
        let meta: string | string[] | object


        if (typeof responseData === 'object' && Reflect.has(responseData, 'message'))
        {
            message = Reflect.get(responseData, 'message')
        }
        else if (typeof responseData === 'string')
        {
            message = responseData
        }
        else
        {
            message = 'something wrong'
        }

        response.status(status).json({
            status:'error',
            statusCode: status,
            timestamp: Date.now(),
            data: {
                message,
            },
        })
    }
}
