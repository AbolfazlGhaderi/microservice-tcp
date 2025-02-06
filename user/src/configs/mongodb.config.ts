import { ConfigService } from '@nestjs/config'
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose'

export class MongodbConfig implements MongooseOptionsFactory
{
    createMongooseOptions(): MongooseModuleOptions
    {
        const configService = new ConfigService()
        return {
            uri: configService.get('MONGODB_URI'),
        }
    }
}
