export declare class CreateAppointmentDto {
    date: Date;
    time: string;
    location: string;
    type: string;
    reason: string;
    patient: string;
    status: string;
    confirmation: boolean;
    additionalNotes?: string;
}
declare const UpdateAppointmentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAppointmentDto>>;
export declare class UpdateAppointmentDto extends UpdateAppointmentDto_base {
}
export {};
