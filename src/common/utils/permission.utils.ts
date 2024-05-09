import { User } from 'src/user/entity/user.entity';

export async function hasPermission(user: User, resource: string, action: string): Promise<boolean> {
  if (!user.permissions) {
    return false;
  }

  return user.permissions.some((perm) => perm.resource === resource && perm.actions.includes(action));
}
