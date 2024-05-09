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
export type PharmacyDocument = Pharmacy & Document;
export declare class Pharmacy {
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
    medicationsPrescribed: {
        medicationId: string;
        dosage: string;
        quantity: number;
    }[];
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
export declare const PharmacySchema: import("mongoose").Schema<Pharmacy, import("mongoose").Model<Pharmacy, any, any, any, Document<unknown, any, Pharmacy> & Pharmacy & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pharmacy, Document<unknown, {}, import("mongoose").FlatRecord<Pharmacy>> & import("mongoose").FlatRecord<Pharmacy> & {
    _id: import("mongoose").Types.ObjectId;
}>;
