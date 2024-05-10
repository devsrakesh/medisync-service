import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  signup(@Body() dto: CreateAuthDto) {
    console.log(dto);
    return this.authService.register(dto);
  }

  @Post('login')
  signin(@Body() dto: UpdateAuthDto) {
    return this.authService.login(dto);
  }
}
