// create-inventory.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsDateString, IsBoolean, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateInventoryDto {
  @IsNotEmpty()
  @IsString()
  itemName: string;

  @IsNotEmpty()
  @IsString()
  itemCode: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  manufacturer?: string;

  @IsOptional()
  @IsString()
  supplier?: string;

  @IsNotEmpty()
  @IsString()
  unitOfMeasurement: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  minimumQuantityThreshold: number;

  @IsNotEmpty()
  @IsNumber()
  unitPrice: number;

  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;

  @IsOptional()
  @IsDateString()
  expiryDate?: Date;

  @IsNotEmpty()
  @IsString()
  transactionType: string;

  @IsNotEmpty()
  @IsDateString()
  transactionDate: Date;

  @IsNotEmpty()
  @IsNumber()
  transactionQuantity: number;

  @IsNotEmpty()
  @IsNumber()
  transactionUnitPrice: number;

  @IsNotEmpty()
  @IsNumber()
  totalTransactionAmount: number;

  @IsOptional()
  @IsString()
  remarks?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsBoolean()
  availability: boolean;

  @IsOptional()
  @IsString()
  createdBy?: string;

  @IsOptional()
  @IsDateString()
  createdAt?: Date;

  @IsOptional()
  @IsString()
  lastModifiedBy?: string;

  @IsOptional()
  @IsDateString()
  lastModifiedAt?: Date;
}

export class UpdateInventoryDto extends PartialType(CreateInventoryDto) {}
