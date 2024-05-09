declare class PaymentTransactionDto {
    paymentDate: Date;
    paymentAmount: number;
    paymentMethod: string;
    transactionId: string;
    paymentStatus: string;
}
declare class ItemizedChargeDto {
    description: string;
    amount: number;
}
declare class RevenueReportDto {
    period: string;
    revenueGenerated: number;
}
declare class AccountsReceivableReportDto {
    period: string;
    outstandingPayments: number;
}
declare class PaymentHistoryDto {
    paymentDate: Date;
    amountReceived: number;
    payer: string;
}
export declare class CreateBillingDto {
    patientFullName: string;
    patientId: string;
    insuranceInfo: string;
    dateOfService: Date;
    serviceDescription: string;
    serviceCharges: number;
    totalAmount: number;
    paymentStatus: string;
    paymentMethod: string;
    paymentTransactions: PaymentTransactionDto[];
    invoiceNumber: string;
    invoiceDate: Date;
    dueDate: Date;
    itemizedCharges: ItemizedChargeDto[];
    totalAmountDue: number;
    statementDate: Date;
    statementPeriod: string;
    revenueReports: RevenueReportDto[];
    accountsReceivableReports: AccountsReceivableReportDto[];
    paymentHistory: PaymentHistoryDto[];
}
declare const UpdateBillingDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBillingDto>>;
export declare class UpdateBillingDto extends UpdateBillingDto_base {
}
export {};
