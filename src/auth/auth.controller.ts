import { Controller, Post, Body, Get, Put, Delete} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { get } from "http";

@Controller('auth')

export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    create(@Body() dto: CreateUserDto) {
        console.log({dto,});
        return this.authService.create(dto)
    }


    @Get('login')
    findAll(){
        return this.authService.findAll()
    }

    @Put('login')
    update(@Body() dto: CreateUserDto){
        return this.authService.update(dto)
    }

    @Delete('login')
    delete(@Body() dto: CreateUserDto){
        return this.authService.delete(dto)
    }

    // @Post('signup')
    // signup() {return this.authService.signup()}
}