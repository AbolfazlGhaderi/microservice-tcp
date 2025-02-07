import { Module } from '@nestjs/common'
import { GetewayController } from './geteway.controller'
import { GetewayService } from './geteway.service'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [ '.env' ],
            isGlobal: true,
        }),
    ],
    controllers: [ GetewayController ],
    providers: [ GetewayService ],
})
export class GetewayModule {}
