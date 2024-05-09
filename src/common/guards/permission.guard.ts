import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { hasPermission } from '../utils/permission.utils';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private usersService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const resource = this.reflector.get<string>('resource', context.getHandler());
    const action = this.reflector.get<string>('action', context.getHandler());

    if (!resource || !action) {
      throw new ForbiddenException('Resource or action not defined');
    }

    const request = context.switchToHttp().getRequest();
    const userId = request.user._id;

    const user = await this.usersService.findOne(userId);

    if (await hasPermission(user, resource, action)) {
      return true;
    }

    throw new ForbiddenException(`You do not have permission to ${action} on ${resource}`);
  }
}
