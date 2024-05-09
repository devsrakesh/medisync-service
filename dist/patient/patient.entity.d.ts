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
import { Document, Types } from 'mongoose';
export type PatientDocument = Patient & Document;
declare class EmergencyContact {
    name: string;
    relationship: string;
    contact: string;
}
declare class InsuranceInformation {
    policyNumber: string;
    company: string;
    coverageDetails: string;
}
export declare class Patient {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    address: string;
    contactNumber: string;
    uniqueCode: string;
    emergencyContact: EmergencyContact;
    insuranceInformation: InsuranceInformation;
    preExistingConditions: string[];
    allergies: string[];
    medications: string[];
    surgicalHistory: string[];
    familyMedicalHistory: string[];
    chiefComplaint: string;
    vitalSigns: {
        bloodPressure: string;
        heartRate: string;
        respiratoryRate: string;
        temperature: string;
        oxygenSaturation: string;
        date: Date;
    }[];
    appointmentSchedule: {
        date: Date;
        time: string;
        location: string;
    }[];
    visitHistory: {
        date: Date;
        reason: string;
        outcome: string;
    }[];
    createdBy: Types.ObjectId;
    updatedBy: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PatientSchema: import("mongoose").Schema<Patient, import("mongoose").Model<Patient, any, any, any, Document<unknown, any, Patient> & Patient & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Patient, Document<unknown, {}, import("mongoose").FlatRecord<Patient>> & import("mongoose").FlatRecord<Patient> & {
    _id: Types.ObjectId;
}>;
export {};
