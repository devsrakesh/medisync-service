// patient.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  dateOfBirth: Date;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  contactInformation: string[];

  @Prop({ required: true })
  emergencyContact: {
    name: string;
    relationship: string;
    contact: string;
  };

  @Prop({ required: true })
  insuranceInformation: {
    policyNumber: string;
    company: string;
    coverageDetails: string;
  };

  @Prop()
  preExistingConditions: string[];

  @Prop()
  allergies: string[];

  @Prop()
  medications: string[];

  @Prop()
  surgicalHistory: string[];

  @Prop()
  familyMedicalHistory: string[];

  @Prop({ required: true })
  chiefComplaint: string;

  @Prop()
  vitalSigns: {
    bloodPressure: string;
    heartRate: string;
    respiratoryRate: string;
    temperature: string;
    oxygenSaturation: string;
  };

  @Prop()
  appointmentSchedule: {
    date: Date;
    time: string;
    location: string;
  }[];

  @Prop()
  visitHistory: {
    date: Date;
    reason: string;
    outcome: string;
  }[];
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
