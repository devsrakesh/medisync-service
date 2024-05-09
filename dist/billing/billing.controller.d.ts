import { BillingService } from './billing.service';
import { CreateBillingDto, UpdateBillingDto } from './billing.dto';
import { Billing } from './billing.entity';
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    findAll(): Promise<Billing[]>;
    findById(id: string): Promise<Billing>;
    create(createBillingDto: CreateBillingDto): Promise<Billing>;
    update(id: string, updateBillingDto: UpdateBillingDto): Promise<Billing>;
    remove(id: string): Promise<Billing>;
}
