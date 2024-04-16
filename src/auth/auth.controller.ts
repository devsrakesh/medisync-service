import { Body, Controller, Post } from '@nestjs/common';
// import { Request } from 'express';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto';

@Controller('auth')
export class AuthController {
  // dependency injection of service here it inject service
  constructor(private authService: AuthService) {
    // this.authService.test();
  }
  // auth/signup
  @Post('signup')
  // @Req() req: Request it dependent to express
  signup(@Body() dto: CreateAuthDto) {
    console.log(dto);
    // return 'i have signed up';
    return this.authService.signup(dto);
  }

  //auth/signin
  @Post('signin')
  signin(@Body() dto: CreateAuthDto) {
    // return 'i have  sign in ';
    return this.authService.signin(dto);
  }
}
