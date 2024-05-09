export declare class CreateHospitalDto {
    name: string;
    registrationId: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pinCode: number;
    phone: string;
    email: string;
    ContactNumber: string;
    logo?: string;
}
declare const UpdateHospitalDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateHospitalDto>>;
export declare class UpdateHospitalDto extends UpdateHospitalDto_base {
}
export {};
