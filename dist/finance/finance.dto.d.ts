export declare class CreateFinanceDto {
    budgetId: string;
    budgetName: string;
    budgetAmount: number;
    budgetPeriod: string;
    budgetCategory: string;
    expenseId: string;
    expenseDate: Date;
    expenseCategory: string;
    expenseAmount: number;
    paymentMethod: string;
    vendor: string;
    expenseDescription: string;
    reportId: string;
    reportName: string;
    reportType: string;
    reportPeriod: string;
    reportData: any;
    accountingSystemId: string;
    integrationStatus: string;
    dataMapping: string;
}
declare const UpdateFinanceDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFinanceDto>>;
export declare class UpdateFinanceDto extends UpdateFinanceDto_base {
}
export {};
