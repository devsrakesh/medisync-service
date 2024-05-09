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
import { Hospital, HospitalDocument } from './hospital.entity';
import { CreateHospitalDto, UpdateHospitalDto } from './hospital.dto';
import { Response } from 'src/common/interceptor/response.interface';
export declare class HospitalService {
    private hospitalModel;
    constructor(hospitalModel: Model<HospitalDocument>);
    findAll(page?: number, pageSize?: number, sortField?: string, sortOrder?: string): Promise<Response<Hospital[]>>;
    findById(id: string): Promise<Response<Hospital>>;
    create(createHospitalDto: CreateHospitalDto): Promise<Response<Hospital>>;
    update(id: string, updateHospitalDto: UpdateHospitalDto): Promise<Response<Hospital>>;
    remove(id: string): Promise<Response<Hospital>>;
}
