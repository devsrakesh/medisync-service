import { PharmacyService } from './pharmacy.service';
import { CreatePharmacyDto, UpdatePharmacyDto } from './pharmacy.dto';
import { Pharmacy } from './pharmacy.entity';
export declare class PharmacyController {
    private readonly pharmacyService;
    constructor(pharmacyService: PharmacyService);
    findAll(): Promise<Pharmacy[]>;
    findById(id: string): Promise<Pharmacy>;
    create(createPharmacyDto: CreatePharmacyDto): Promise<Pharmacy>;
    update(id: string, updatePharmacyDto: UpdatePharmacyDto): Promise<Pharmacy>;
    remove(id: string): Promise<Pharmacy>;
}
