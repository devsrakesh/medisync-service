import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define types for nested objects
export type BillingDocument = Billing &Document
class InsuranceInfo {
  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  policyNumber: string;

  @Prop({ required: true })
  coverageDetails: string;
}

@Schema()
export class Billing {
  @Prop({ required: true })
  patientFullName: string;

  @Prop({ required: true })
  patientId: string;

  @Prop({ required: true, type: InsuranceInfo }) // Specify the type for nested object
  insuranceInfo: InsuranceInfo;

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

  @Prop({ required: true, type: [{ paymentDate: Date, paymentAmount: Number, paymentMethod: String, transactionId: String, paymentStatus: String }] }) // Specify the type as an array of objects
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

  @Prop({ required: true, type: [{ description: String, amount: Number }] }) // Specify the type as an array of objects
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

  @Prop({ required: true, type: [{ period: String, revenueGenerated: Number }] }) // Specify the type as an array of objects
  revenueReports: {
    period: string;
    revenueGenerated: number;
  }[];

  @Prop({ required: true, type: [{ period: String, outstandingPayments: Number }] }) // Specify the type as an array of objects
  accountsReceivableReports: {
    period: string;
    outstandingPayments: number;
  }[];

  @Prop({ required: true, type: [{ paymentDate: Date, amountReceived: Number, payer: String }] }) // Specify the type as an array of objects
  paymentHistory: {
    paymentDate: Date;
    amountReceived: number;
    payer: string;
  }[];
}

export const BillingSchema = SchemaFactory.createForClass(Billing);
