// appointment.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PatientDocument } from '../patient/patient.entity';

export type AppointmentDocument = Appointment & Document;

@Schema()
export class Appointment {
  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true, enum: ['consultation', 'diagnostic', 'follow-up'] })
  type: string;

  @Prop({ required: true })
  reason: string;

  @Prop({ type: String, ref: 'Patient', required: true })
  patient: PatientDocument | string; // This establishes the one-to-many relationship with Patient

  @Prop({ required: true, enum: ['scheduled', 'confirmed', 'canceled', 'completed'] })
  status: string;

  @Prop({ default: false })
  confirmation: boolean;

  @Prop()
  additionalNotes: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
