// create-pharmacy.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsDate, ArrayMinSize, ArrayNotEmpty, ArrayMaxSize, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class MedicationPrescribedDto {
  @IsNotEmpty()
  @IsString()
  medicationId: string;

  @IsNotEmpty()
  @IsString()
  dosage: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}

export class CreatePharmacyDto {
  // Medication Information
  @IsNotEmpty()
  @IsString()
  medicationId: string;

  @IsNotEmpty()
  @IsString()
  medicationName: string;

  @IsNotEmpty()
  @IsString()
  medicationCode: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  manufacturer: string;

  @IsNotEmpty()
  @IsString()
  supplier: string;

  // Stock Management
  @IsNotEmpty()
  @IsNumber()
  quantityAvailable: number;

  @IsNotEmpty()
  @IsNumber()
  minimumStockLevel: number;

  @IsNotEmpty()
  @IsNumber()
  maximumStockLevel: number;

  @IsNotEmpty()
  @IsDate()
  expiryDate: Date;

  @IsNotEmpty()
  @IsString()
  location: string;

  // Prescription Tracking
  @IsNotEmpty()
  @IsString()
  prescriptionId: string;

  @IsNotEmpty()
  @IsString()
  patientId: string;

  @IsNotEmpty()
  @IsString()
  prescriber: string;

  @IsNotEmpty()
  @IsDate()
  prescriptionDate: Date;

  @ArrayMinSize(1)
  @ArrayNotEmpty()
  @ArrayMaxSize(10)
  @ValidateNested({ each: true })
  @Type(() => MedicationPrescribedDto)
  medicationsPrescribed: MedicationPrescribedDto[];

  @IsNotEmpty()
  @IsString()
  dispensingStatus: string;

  dispensingDate: Date;

  // Transaction History
  @IsNotEmpty()
  @IsString()
  transactionId: string;

  @IsNotEmpty()
  @IsString()
  transactionType: string;

  @IsNotEmpty()
  @IsDate()
  transactionDate: Date;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  transactionAmount: number;

  // Integration with EMR Systems
  @IsNotEmpty()
  @IsString()
  emrId: string;

  @IsNotEmpty()
  @IsString()
  integrationStatus: string;

  @IsNotEmpty()
  @IsString()
  dataMapping: string;
}



export class UpdatePharmacyDto extends PartialType(CreatePharmacyDto) {}