import { FinanceService } from './finance.service';
import { CreateFinanceDto, UpdateFinanceDto } from './finance.dto';
import { Finance } from './finance.entity';
export declare class FinanceController {
    private readonly financeService;
    constructor(financeService: FinanceService);
    findAll(): Promise<Finance[]>;
    findById(id: string): Promise<Finance>;
    create(createFinanceDto: CreateFinanceDto): Promise<Finance>;
    update(id: string, updateFinanceDto: UpdateFinanceDto): Promise<Finance>;
    remove(id: string): Promise<Finance>;
}
