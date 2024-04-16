import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// Define types for nested objects
export type PatientDocument = Patient & Document;
class EmergencyContact {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  relationship: string;

  @Prop({ required: true })
  contact: string;
}

class InsuranceInformation {
  @Prop({ required: true })
  policyNumber: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  coverageDetails: string;
}

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

  @Prop({ required: true, type: EmergencyContact }) // Specify the type for nested object
  emergencyContact: EmergencyContact;

  @Prop({ required: true, type: InsuranceInformation }) // Specify the type for nested object
  insuranceInformation: InsuranceInformation;

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

  @Prop({ type: Object }) // Specify the type as Object
  vitalSigns: {
    bloodPressure: string;
    heartRate: string;
    respiratoryRate: string;
    temperature: string;
    oxygenSaturation: string;
  };

  @Prop({ type: [{ date: Date, time: String, location: String }] }) // Specify the type as an array of objects
  appointmentSchedule: {
    date: Date;
    time: string;
    location: string;
  }[];

  @Prop({ type: [{ date: Date, reason: String, outcome: String }] }) // Specify the type as an array of objects
  visitHistory: {
    date: Date;
    reason: string;
    outcome: string;
  }[];
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
