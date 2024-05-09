import { PatientService } from './patient.service';
import { Response } from 'src/interceptor/response.interface';
import { Patient } from './patient.entity';
import { CreatePatientDto, UpdatePatientDto } from './patient.dto';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    findAll(page?: number, pageSize?: number, sortField?: string, sortOrder?: 'asc' | 'desc'): Promise<Response<Patient[]>>;
    findById(id: string): Promise<Response<Patient>>;
    create(createPatientDto: CreatePatientDto): Promise<Response<Patient>>;
    update(id: string, updatePatientDto: UpdatePatientDto): Promise<Response<Patient>>;
    remove(id: string): Promise<Response<Patient>>;
}
