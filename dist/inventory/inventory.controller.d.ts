import { InventoryService } from './inventory.service';
import { CreateInventoryDto, UpdateInventoryDto } from './inventory.dto';
import { Inventory } from './inventory.entity';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    findAll(): Promise<Inventory[]>;
    findById(id: string): Promise<Inventory>;
    create(createInventoryDto: CreateInventoryDto): Promise<Inventory>;
    update(id: string, updateInventoryDto: UpdateInventoryDto): Promise<Inventory>;
    remove(id: string): Promise<Inventory>;
}
