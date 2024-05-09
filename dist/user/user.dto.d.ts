export declare class CreateUserDto {
    contactNumber: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
