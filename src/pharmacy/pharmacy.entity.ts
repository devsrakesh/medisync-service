// pharmacy.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PharmacyDocument = Pharmacy & Document;

@Schema()
export class Pharmacy {
  // Medication Information
  @Prop({ required: true })
  medicationId: string;

  @Prop({ required: true })
  medicationName: string;

  @Prop({ required: true })
  medicationCode: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  manufacturer: string;

  @Prop({ required: true })
  supplier: string;

  // Stock Management
  @Prop({ required: true })
  quantityAvailable: number;

  @Prop({ required: true })
  minimumStockLevel: number;

  @Prop({ required: true })
  maximumStockLevel: number;

  @Prop({ required: true })
  expiryDate: Date;

  @Prop({ required: true })
  location: string;

  // Prescription Tracking
  @Prop({ required: true })
  prescriptionId: string;

  @Prop({ required: true })
  patientId: string;

  @Prop({ required: true })
  prescriber: string;

  @Prop({ required: true })
  prescriptionDate: Date;

  @Prop()
  medicationsPrescribed: { medicationId: string, dosage: string, quantity: number }[];

  @Prop({ required: true })
  dispensingStatus: string;

  @Prop()
  dispensingDate: Date;

  // Transaction History
  @Prop({ required: true })
  transactionId: string;

  @Prop({ required: true })
  transactionType: string;

  @Prop({ required: true })
  transactionDate: Date;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  transactionAmount: number;

  // Integration with EMR Systems
  @Prop({ required: true })
  emrId: string;

  @Prop({ required: true })
  integrationStatus: string;

  @Prop({ required: true })
  dataMapping: string;
}

export const PharmacySchema = SchemaFactory.createForClass(Pharmacy);
