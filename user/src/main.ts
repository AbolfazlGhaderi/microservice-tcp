import { NestFactory } from '@nestjs/core'
import { UserModule } from './user.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap()
{
    const app = await NestFactory.create(UserModule)
    const configService = app.get(ConfigService)
    await app.listen(configService.get('APP_PORT') ?? 3000)
}
bootstrap()
