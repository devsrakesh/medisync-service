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
import { Model } from 'mongoose';
import { Patient, PatientDocument } from './patient.entity';
import { CreatePatientDto, UpdatePatientDto } from './patient.dto';
import { Response } from 'src/common/interceptor/response.interface';
export declare class PatientService {
    private patientModel;
    constructor(patientModel: Model<PatientDocument>);
    findAll(page?: number, pageSize?: number, sortField?: string, sortOrder?: string): Promise<Response<Patient[]>>;
    findById(id: string): Promise<Response<Patient>>;
    create(createPatientDto: CreatePatientDto): Promise<Response<Patient>>;
    update(id: string, updatePatientDto: UpdatePatientDto): Promise<Response<Patient>>;
    remove(id: string): Promise<Response<Patient>>;
}
