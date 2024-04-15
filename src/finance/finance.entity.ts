// finance.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FinanceDocument = Finance & Document;

@Schema()
export class Finance {
  // Budgeting
  @Prop({ required: true })
  budgetId: string;

  @Prop({ required: true })
  budgetName: string;

  @Prop({ required: true })
  budgetAmount: number;

  @Prop({ required: true })
  budgetPeriod: string;

  @Prop({ required: true })
  budgetCategory: string;

  // Expense Tracking
  @Prop({ required: true })
  expenseId: string;

  @Prop({ required: true })
  expenseDate: Date;

  @Prop({ required: true })
  expenseCategory: string;

  @Prop({ required: true })
  expenseAmount: number;

  @Prop({ required: true })
  paymentMethod: string;

  @Prop({ required: true })
  vendor: string;

  @Prop({ required: true })
  expenseDescription: string;

  // Financial Reporting
  @Prop({ required: true })
  reportId: string;

  @Prop({ required: true })
  reportName: string;

  @Prop({ required: true })
  reportType: string;

  @Prop({ required: true })
  reportPeriod: string;

  @Prop({ required: true })
  reportData: any; // Assuming report data can vary based on report type

  // Integration with Accounting Systems
  @Prop({ required: true })
  accountingSystemId: string;

  @Prop({ required: true })
  integrationStatus: string;

  @Prop({ required: true })
  dataMapping: string;
}

export const FinanceSchema = SchemaFactory.createForClass(Finance);
