import { LaboratoryService } from './laboratory.service';
import { CreateLaboratoryDto, UpdateLaboratoryDto } from './laboratory.dto';
import { Laboratory } from './laboratory.entity';
export declare class LaboratoryController {
    private readonly laboratoryService;
    constructor(laboratoryService: LaboratoryService);
    findAll(): Promise<Laboratory[]>;
    findById(id: string): Promise<Laboratory>;
    create(createLaboratoryDto: CreateLaboratoryDto): Promise<Laboratory>;
    update(id: string, updateLaboratoryDto: UpdateLaboratoryDto): Promise<Laboratory>;
    remove(id: string): Promise<Laboratory>;
}
