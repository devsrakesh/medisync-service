// create-billing.dto.ts
import { IsNotEmpty, IsDateString, IsString, IsNumber, IsEnum, IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class PaymentTransactionDto {
  @IsDateString()
  paymentDate: Date;

  @IsNumber()
  paymentAmount: number;

  @IsString()
  paymentMethod: string;

  @IsString()
  transactionId: string;

  @IsEnum(['pending', 'paid', 'partially_paid'])
  paymentStatus: string;
}

class ItemizedChargeDto {
  @IsString()
  description: string;

  @IsNumber()
  amount: number;
}

class RevenueReportDto {
  @IsString()
  period: string;

  @IsNumber()
  revenueGenerated: number;
}

class AccountsReceivableReportDto {
  @IsString()
  period: string;

  @IsNumber()
  outstandingPayments: number;
}

class PaymentHistoryDto {
  @IsDateString()
  paymentDate: Date;

  @IsNumber()
  amountReceived: number;

  @IsString()
  payer: string;
}

export class CreateBillingDto {
  @IsNotEmpty()
  @IsString()
  patientFullName: string;

  @IsNotEmpty()
  @IsString()
  patientId: string;

  @IsNotEmpty()
  @IsString()
  insuranceInfo: string; // Consider creating a separate DTO for insurance information if it's complex.

  @IsNotEmpty()
  @IsDateString()
  dateOfService: Date;

  @IsNotEmpty()
  @IsString()
  serviceDescription: string;

  @IsNotEmpty()
  @IsNumber()
  serviceCharges: number;

  @IsNotEmpty()
  @IsNumber()
  totalAmount: number;

  @IsNotEmpty()
  @IsEnum(['pending', 'paid', 'partially_paid'])
  paymentStatus: string;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PaymentTransactionDto)
  paymentTransactions: PaymentTransactionDto[];

  @IsNotEmpty()
  @IsString()
  invoiceNumber: string;

  @IsNotEmpty()
  @IsDateString()
  invoiceDate: Date;

  @IsNotEmpty()
  @IsDateString()
  dueDate: Date;

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ItemizedChargeDto)
  itemizedCharges: ItemizedChargeDto[];

  @IsNotEmpty()
  @IsNumber()
  totalAmountDue: number;

  @IsNotEmpty()
  @IsDateString()
  statementDate: Date;

  @IsNotEmpty()
  @IsString()
  statementPeriod: string;

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => RevenueReportDto)
  revenueReports: RevenueReportDto[];

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => AccountsReceivableReportDto)
  accountsReceivableReports: AccountsReceivableReportDto[];

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PaymentHistoryDto)
  paymentHistory: PaymentHistoryDto[];
}

export class UpdateBillingDto extends PartialType(CreateBillingDto) {}
