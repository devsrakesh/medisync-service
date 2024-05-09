import { HumanResourcesService } from './human-resources.service';
import { CreateHumanResourcesDto, UpdateHumanResourcesDto } from './human-resources.dto';
import { HumanResources } from './human-resources.entity';
export declare class HumanResourcesController {
    private readonly humanResourcesService;
    constructor(humanResourcesService: HumanResourcesService);
    findAll(): Promise<HumanResources[]>;
    findById(id: string): Promise<HumanResources>;
    create(createHumanResourcesDto: CreateHumanResourcesDto): Promise<HumanResources>;
    update(id: string, updateHumanResourcesDto: UpdateHumanResourcesDto): Promise<HumanResources>;
    remove(id: string): Promise<HumanResources>;
}
