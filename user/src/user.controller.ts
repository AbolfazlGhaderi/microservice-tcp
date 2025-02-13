import { Controller, Get } from '@nestjs/common'
import { UserService } from './services/user.service'

@Controller()
export class UserController
{
    constructor(private readonly appService: UserService) {}

    @Get()
    getHello(): string
    {
        return this.appService.getHello()
    }
}
