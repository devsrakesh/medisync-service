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
export type LaboratoryDocument = Laboratory & Document;
export declare class Laboratory {
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
export declare const LaboratorySchema: import("mongoose").Schema<Laboratory, import("mongoose").Model<Laboratory, any, any, any, Document<unknown, any, Laboratory> & Laboratory & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Laboratory, Document<unknown, {}, import("mongoose").FlatRecord<Laboratory>> & import("mongoose").FlatRecord<Laboratory> & {
    _id: import("mongoose").Types.ObjectId;
}>;
