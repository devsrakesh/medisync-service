/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: CreateAuthDto): Promise<{
        data: {
            accessToken: string;
            _id: import("mongoose").Types.ObjectId;
            __v?: any;
            $locals: Record<string, unknown>;
            $op: "remove" | "save" | "validate";
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection<import("bson").Document>;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
                [x: string]: unknown;
            }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
                [x: string]: unknown;
            }>> & import("mongoose").FlatRecord<{
                [x: string]: unknown;
            }> & Required<{
                _id: unknown;
            }>>;
            userId: string;
            password: string;
            email: string;
            name: string;
            contactNumber: string;
            Address: string;
            city: string;
            state: string;
            country: string;
            pinCode: string;
            hospital: import("mongoose").Types.ObjectId;
            role: import("mongoose").Types.ObjectId;
            Designation: import("mongoose").Types.ObjectId;
            permissions: import("../permissions/entities/permission.entity").IPermission[];
            createdAt: Date;
            updatedAt: Date;
            createdBy: import("mongoose").Types.ObjectId;
            updatedBy: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
    signin(dto: UpdateAuthDto): Promise<{
        data: {
            userId: string;
            _id: import("mongoose").Types.ObjectId;
            accessToken: string;
        };
        message: string;
    }>;
}
