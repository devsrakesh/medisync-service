import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/user/user.service';
export declare class PermissionsGuard implements CanActivate {
    private reflector;
    private usersService;
    constructor(reflector: Reflector, usersService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
