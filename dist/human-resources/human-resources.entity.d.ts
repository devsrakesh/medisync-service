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
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export type HumanResourcesDocument = HumanResources & Document;
declare class ContactInformation {
    phone: string;
    email: string;
    address: string;
}
declare class performanceReviews {
    date: Date;
    reviewer: string;
    comments: string;
}
declare class payrollTaxInformation {
    taxDeductions: number;
    exemptions: number;
    filingStatus: string;
}
declare class salaryInformation {
    baseSalary: number;
    allowances: Allowance[];
    deductions: Deduction[];
}
declare class leaveManagement {
    leaveType: string;
    startDate: Date;
    endDate: Date;
    reason: string;
}
declare class EmergencyContact {
    name: string;
    relationship: string;
    contact: string;
}
declare class Allowance {
    name: string;
    amount: number;
}
declare class Deduction {
    name: string;
    amount: number;
}
declare class shiftSchedule {
    shift: string;
    startTime: Date;
    endTime: Date;
    workdays: string[];
}
declare class PerformanceMetric {
    metric: string;
    value: number;
}
declare class PerformanceImprovementPlan {
    date: Date;
    plan: string;
}
export declare class HumanResources {
    employeeId: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date;
    contactInformation: ContactInformation;
    emergencyContact: EmergencyContact;
    jobTitle: string;
    department: string;
    employmentStatus: string;
    dateOfJoining: Date;
    shiftSchedule: shiftSchedule[];
    leaveManagement: leaveManagement[];
    salaryInformation: salaryInformation;
    payrollPeriod: string;
    payrollTaxInformation: payrollTaxInformation;
    paymentMethod: string;
    performanceMetrics: PerformanceMetric[];
    performanceReviews: performanceReviews[];
    trainingAndDevelopment: string[];
    performanceImprovementPlans: PerformanceImprovementPlan[];
}
export declare const HumanResourcesSchema: import("mongoose").Schema<HumanResources, import("mongoose").Model<HumanResources, any, any, any, Document<unknown, any, HumanResources> & HumanResources & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HumanResources, Document<unknown, {}, import("mongoose").FlatRecord<HumanResources>> & import("mongoose").FlatRecord<HumanResources> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export {};
