import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './services/user.service'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { MongodbConfig } from './configs/mongodb.config'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [ '.env' ],
            isGlobal: true,
        }),
        MongooseModule.forRootAsync({
            useClass: MongodbConfig,
        }),
    ],
    controllers: [ UserController ],
    providers: [ UserService ],
})
export class UserModule {}
