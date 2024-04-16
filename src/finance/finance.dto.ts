// create-finance.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateFinanceDto {
  // Budgeting
  @IsNotEmpty()
  @IsString()
  budgetId: string;

  @IsNotEmpty()
  @IsString()
  budgetName: string;

  @IsNotEmpty()
  @IsNumber()
  budgetAmount: number;

  @IsNotEmpty()
  @IsString()
  budgetPeriod: string;

  @IsNotEmpty()
  @IsString()
  budgetCategory: string;

  // Expense Tracking
  @IsNotEmpty()
  @IsString()
  expenseId: string;

  @IsNotEmpty()
  @IsDate()
  expenseDate: Date;

  @IsNotEmpty()
  @IsString()
  expenseCategory: string;

  @IsNotEmpty()
  @IsNumber()
  expenseAmount: number;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @IsNotEmpty()
  @IsString()
  vendor: string;

  @IsNotEmpty()
  @IsString()
  expenseDescription: string;

  // Financial Reporting
  @IsNotEmpty()
  @IsString()
  reportId: string;

  @IsNotEmpty()
  @IsString()
  reportName: string;

  @IsNotEmpty()
  @IsString()
  reportType: string;

  @IsNotEmpty()
  @IsString()
  reportPeriod: string;

  @IsNotEmpty()
  reportData: any;

  // Integration with Accounting Systems
  @IsNotEmpty()
  @IsString()
  accountingSystemId: string;

  @IsNotEmpty()
  @IsString()
  integrationStatus: string;

  @IsNotEmpty()
  @IsString()
  dataMapping: string;
}

export class UpdateFinanceDto extends PartialType(CreateFinanceDto) {}
