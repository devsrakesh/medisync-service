import { HospitalService } from './hospital.service';
import { CreateHospitalDto, UpdateHospitalDto } from './hospital.dto';
import { Hospital } from './hospital.entity';
import { Response } from 'src/common/interceptor/response.interface';
export declare class HospitalController {
    private readonly hospitalService;
    constructor(hospitalService: HospitalService);
    findAll(page?: string, pageSize?: string, sortField?: string, sortOrder?: string): Promise<Response<Hospital[]>>;
    findById(id: string): Promise<Response<Hospital>>;
    create(createHospitalDto: CreateHospitalDto): Promise<Response<Hospital>>;
    update(id: string, updateHospitalDto: UpdateHospitalDto): Promise<Response<Hospital>>;
    remove(id: string): Promise<Response<Hospital>>;
}
