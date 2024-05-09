export declare class CreateLaboratoryDto {
    sampleId: string;
    patientId: string;
    sampleType: string;
    collectionDateTime: Date;
    collectionLocation: string;
    collector: string;
    sampleStatus: string;
    testId: string;
    testName: string;
    testType: string;
    testRequestDate: Date;
    testCompletionDate: Date;
    testResult: string;
    testUnits: string;
    testMethodology: string;
    testInterpretation: string;
    testStatus: string;
    equipmentId: string;
    equipmentName: string;
    equipmentType: string;
    equipmentStatus: string;
    resourceAvailability: string;
    emrId: string;
    integrationStatus: string;
    dataMapping: string;
}
declare const UpdateLaboratoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateLaboratoryDto>>;
export declare class UpdateLaboratoryDto extends UpdateLaboratoryDto_base {
}
export {};
