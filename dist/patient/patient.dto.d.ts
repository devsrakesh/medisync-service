declare class EmergencyContactDto {
    name: string;
    relationship: string;
    contact: string;
}
declare class InsuranceInformationDto {
    policyNumber: string;
    company: string;
    coverageDetails: string;
}
declare class VitalSignsDto {
    bloodPressure: string;
    heartRate: string;
    respiratoryRate: string;
    temperature: string;
    oxygenSaturation: string;
}
declare class AppointmentScheduleDto {
    date: Date;
    time: string;
    location: string;
}
declare class VisitHistoryDto {
    date: Date;
    reason: string;
    outcome: string;
}
export declare class CreatePatientDto {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    address: string;
    contactNumber: string;
    uniqueCode: string;
    emergencyContact: EmergencyContactDto;
    insuranceInformation: InsuranceInformationDto;
    preExistingConditions: string[];
    allergies: string[];
    medications: string[];
    surgicalHistory: string[];
    familyMedicalHistory: string[];
    chiefComplaint?: string;
    vitalSigns: VitalSignsDto;
    appointmentSchedule: AppointmentScheduleDto[];
    visitHistory?: VisitHistoryDto[];
}
declare const UpdatePatientDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePatientDto>>;
export declare class UpdatePatientDto extends UpdatePatientDto_base {
}
export {};
