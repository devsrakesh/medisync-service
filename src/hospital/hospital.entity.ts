// hospital.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type HospitalDocument = Hospital & Document;

@Schema()
export class Hospital extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  registrationId: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  pinCode: number;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  ContactNumber: string;

  @Prop()
  logo: string;

  @Prop({})
  createdBy: Types.ObjectId;

  @Prop({})
  updatedBy: Types.ObjectId;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
