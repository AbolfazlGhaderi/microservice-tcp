import { Controller, Get } from '@nestjs/common'
import { GetewayService } from './geteway.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('')
@ApiTags('root')
export class GetewayController
{
    constructor(private readonly appService: GetewayService) {}

    @Get('/')
    getHello(): string
    {
        return this.appService.getHello()
    }
}
