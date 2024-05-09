declare class ContactInformationDto {
    phone: string;
    email: string;
    address: string;
}
declare class EmergencyContactDto {
    name: string;
    relationship: string;
    contact: string;
}
declare class AllowanceDto {
    name: string;
    amount: number;
}
declare class DeductionDto {
    name: string;
    amount: number;
}
declare class ShiftScheduleDto {
    shift: string;
    startTime: Date;
    endTime: Date;
    workdays: string[];
}
declare class LeaveManagementDto {
    leaveType: string;
    startDate: Date;
    endDate: Date;
    reason?: string;
}
declare class PerformanceMetricDto {
    metric: string;
    value: number;
}
declare class PerformanceReviewDto {
    date: Date;
    reviewer: string;
    comments?: string;
}
declare class PerformanceImprovementPlanDto {
    date: Date;
    plan: string;
}
export declare class CreateHumanResourcesDto {
    employeeId: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date;
    contactInformation: ContactInformationDto;
    emergencyContact: EmergencyContactDto;
    jobTitle: string;
    department: string;
    employmentStatus: string;
    dateOfJoining: Date;
    shiftSchedule?: ShiftScheduleDto[];
    leaveManagement?: LeaveManagementDto[];
    salaryInformation?: {
        baseSalary: number;
        allowances: AllowanceDto[];
        deductions: DeductionDto[];
    };
    payrollPeriod: string;
    payrollTaxInformation: {
        taxDeductions: number;
        exemptions: number;
        filingStatus: string;
    };
    paymentMethod: string;
    performanceMetrics?: PerformanceMetricDto[];
    performanceReviews?: PerformanceReviewDto[];
    trainingAndDevelopment?: string[];
    performanceImprovementPlans?: PerformanceImprovementPlanDto[];
}
declare const UpdateHumanResourcesDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateHumanResourcesDto>>;
export declare class UpdateHumanResourcesDto extends UpdateHumanResourcesDto_base {
}
export {};
