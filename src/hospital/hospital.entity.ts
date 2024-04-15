// hospital.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HospitalDocument = Hospital & Document

@Schema()
export class Hospital extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  hospitalId: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  logo: string; // This can be a URL pointing to the hospital's logo image

  // You can add more properties as needed

  // Timestamps for creation and last update
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
