import { User } from 'src/user/entity/user.entity';
export declare function hasPermission(user: User, resource: string, action: string): Promise<boolean>;
