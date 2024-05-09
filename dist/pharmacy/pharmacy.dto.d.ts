declare class MedicationPrescribedDto {
    medicationId: string;
    dosage: string;
    quantity: number;
}
export declare class CreatePharmacyDto {
    medicationId: string;
    medicationName: string;
    medicationCode: string;
    description: string;
    manufacturer: string;
    supplier: string;
    quantityAvailable: number;
    minimumStockLevel: number;
    maximumStockLevel: number;
    expiryDate: Date;
    location: string;
    prescriptionId: string;
    patientId: string;
    prescriber: string;
    prescriptionDate: Date;
    medicationsPrescribed: MedicationPrescribedDto[];
    dispensingStatus: string;
    dispensingDate: Date;
    transactionId: string;
    transactionType: string;
    transactionDate: Date;
    quantity: number;
    transactionAmount: number;
    emrId: string;
    integrationStatus: string;
    dataMapping: string;
}
declare const UpdatePharmacyDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePharmacyDto>>;
export declare class UpdatePharmacyDto extends UpdatePharmacyDto_base {
}
export {};
