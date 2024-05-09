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
export type BillingDocument = Billing & Document;
declare class InsuranceInfo {
    companyName: string;
    policyNumber: string;
    coverageDetails: string;
}
export declare class Billing {
    patientFullName: string;
    patientId: string;
    insuranceInfo: InsuranceInfo;
    dateOfService: Date;
    serviceDescription: string;
    serviceCharges: number;
    totalAmount: number;
    paymentStatus: string;
    paymentMethod: string;
    paymentTransactions: {
        paymentDate: Date;
        paymentAmount: number;
        paymentMethod: string;
        transactionId: string;
        paymentStatus: string;
    }[];
    invoiceNumber: string;
    invoiceDate: Date;
    dueDate: Date;
    itemizedCharges: {
        description: string;
        amount: number;
    }[];
    totalAmountDue: number;
    statementDate: Date;
    statementPeriod: string;
    revenueReports: {
        period: string;
        revenueGenerated: number;
    }[];
    accountsReceivableReports: {
        period: string;
        outstandingPayments: number;
    }[];
    paymentHistory: {
        paymentDate: Date;
        amountReceived: number;
        payer: string;
    }[];
}
export declare const BillingSchema: import("mongoose").Schema<Billing, import("mongoose").Model<Billing, any, any, any, Document<unknown, any, Billing> & Billing & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Billing, Document<unknown, {}, import("mongoose").FlatRecord<Billing>> & import("mongoose").FlatRecord<Billing> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export {};
