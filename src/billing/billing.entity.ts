// billing.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BillingDocument = Billing & Document;

@Schema()
export class Billing {
  @Prop({ required: true })
  patientFullName: string;

  @Prop({ required: true })
  patientId: string;

  @Prop({ required: true })
  insuranceInfo: {
    companyName: string;
    policyNumber: string;
    coverageDetails: string;
  };

  @Prop({ required: true })
  dateOfService: Date;

  @Prop({ required: true })
  serviceDescription: string;

  @Prop({ required: true })
  serviceCharges: number;

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ required: true, enum: ['pending', 'paid', 'partially_paid'] })
  paymentStatus: string;

  @Prop({ required: true })
  paymentMethod: string;

  @Prop({ required: true })
  paymentTransactions: {
    paymentDate: Date;
    paymentAmount: number;
    paymentMethod: string;
    transactionId: string;
    paymentStatus: string;
  }[];

  @Prop({ required: true })
  invoiceNumber: string;

  @Prop({ required: true })
  invoiceDate: Date;

  @Prop({ required: true })
  dueDate: Date;

  @Prop({ required: true })
  itemizedCharges: {
    description: string;
    amount: number;
  }[];

  @Prop({ required: true })
  totalAmountDue: number;

  @Prop({ required: true })
  statementDate: Date;

  @Prop({ required: true })
  statementPeriod: string;

  @Prop({ required: true })
  revenueReports: {
    period: string;
    revenueGenerated: number;
  }[];

  @Prop({ required: true })
  accountsReceivableReports: {
    period: string;
    outstandingPayments: number;
  }[];

  @Prop({ required: true })
  paymentHistory: {
    paymentDate: Date;
    amountReceived: number;
    payer: string;
  }[];
}

export const BillingSchema = SchemaFactory.createForClass(Billing);
