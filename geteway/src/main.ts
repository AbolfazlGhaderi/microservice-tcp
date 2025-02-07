import { NestFactory } from '@nestjs/core'
import { GetewayModule } from './geteway.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { SwaggerConfig } from './configs/swagger.config'
import { ConfigService } from '@nestjs/config'
import { HttpExceptionFilter } from './app/exceptionFilters/http.exceptionFilter'
import { ResponseControllerInterceptor } from './app/interceptors/response.controller.interceptor'
import { Logger, ValidationPipe } from '@nestjs/common'

async function bootstrap()
{
    const app = await NestFactory.create<NestExpressApplication>(GetewayModule)
    SwaggerConfig(app)
    const configService = app.get(ConfigService)
    const port = configService.get('APP_PORT') ?? 3000

    // initialize app
    app.useGlobalFilters(new HttpExceptionFilter())
    app.useGlobalInterceptors(new ResponseControllerInterceptor())
    app.useGlobalPipes( new ValidationPipe())

    // Swagger
    SwaggerConfig(app)


    await app.listen(port)
    // logs
    Logger.log(`App :  http://localhost:${port}`)
    Logger.log(`Swagger :  http://localhost:${port}/docs`)


}
bootstrap()
