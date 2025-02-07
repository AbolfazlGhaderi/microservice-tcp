import { Injectable } from '@nestjs/common'

@Injectable()
export class GetewayService
{
    getHello(): string
    {
        return 'Hello World!'
    }
}
