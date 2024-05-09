export declare class CreateInventoryDto {
    itemName: string;
    itemCode: string;
    category: string;
    manufacturer?: string;
    supplier?: string;
    unitOfMeasurement: string;
    quantity: number;
    minimumQuantityThreshold: number;
    unitPrice: number;
    totalPrice: number;
    expiryDate?: Date;
    transactionType: string;
    transactionDate: Date;
    transactionQuantity: number;
    transactionUnitPrice: number;
    totalTransactionAmount: number;
    remarks?: string;
    location?: string;
    status: string;
    availability: boolean;
    createdBy?: string;
    createdAt?: Date;
    lastModifiedBy?: string;
    lastModifiedAt?: Date;
}
declare const UpdateInventoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateInventoryDto>>;
export declare class UpdateInventoryDto extends UpdateInventoryDto_base {
}
export {};
