import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
export declare class PermissionsController {
    private permissionsService;
    constructor(permissionsService: PermissionsService);
    findAll(): Promise<import("./entities/permission.entity").IPermission[]>;
    findById(id: string): Promise<import("./entities/permission.entity").IPermission>;
    create(createPermissionDto: CreatePermissionDto): Promise<import("./entities/permission.entity").IPermission>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
