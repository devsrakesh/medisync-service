import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private jwtService;
    private usersService;
    constructor(jwtService: JwtService, usersService: UserService);
    validateUser(username: string, password: string): Promise<User | null>;
    login(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
