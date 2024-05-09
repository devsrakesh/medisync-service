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
export type FinanceDocument = Finance & Document;
export declare class Finance {
    budgetId: string;
    budgetName: string;
    budgetAmount: number;
    budgetPeriod: string;
    budgetCategory: string;
    expenseId: string;
    expenseDate: Date;
    expenseCategory: string;
    expenseAmount: number;
    paymentMethod: string;
    vendor: string;
    expenseDescription: string;
    reportId: string;
    reportName: string;
    reportType: string;
    reportPeriod: string;
    reportData: string;
    accountingSystemId: string;
    integrationStatus: string;
    dataMapping: string;
}
export declare const FinanceSchema: import("mongoose").Schema<Finance, import("mongoose").Model<Finance, any, any, any, Document<unknown, any, Finance> & Finance & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Finance, Document<unknown, {}, import("mongoose").FlatRecord<Finance>> & import("mongoose").FlatRecord<Finance> & {
    _id: import("mongoose").Types.ObjectId;
}>;
