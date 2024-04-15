// laboratory.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LaboratoryDocument = Laboratory & Document;

@Schema()
export class Laboratory {
  // Sample Information
  @Prop({ required: true })
  sampleId: string;

  @Prop({ required: true })
  patientId: string;

  @Prop({ required: true })
  sampleType: string;

  @Prop({ required: true })
  collectionDateTime: Date;

  @Prop({ required: true })
  collectionLocation: string;

  @Prop({ required: true })
  collector: string;

  @Prop({ required: true })
  sampleStatus: string;

  // Test Information
  @Prop({ required: true })
  testId: string;

  @Prop({ required: true })
  testName: string;

  @Prop({ required: true })
  testType: string;

  @Prop({ required: true })
  testRequestDate: Date;

  @Prop()
  testCompletionDate: Date;

  @Prop()
  testResult: string;

  @Prop()
  testUnits: string;

  @Prop()
  testMethodology: string;

  @Prop()
  testInterpretation: string;

  @Prop({ required: true })
  testStatus: string;

  // Laboratory Equipment and Resources
  @Prop({ required: true })
  equipmentId: string;

  @Prop({ required: true })
  equipmentName: string;

  @Prop({ required: true })
  equipmentType: string;

  @Prop({ required: true })
  equipmentStatus: string;

  @Prop({ required: true })
  resourceAvailability: string;

  // Integration with EMR Systems
  @Prop({ required: true })
  emrId: string;

  @Prop({ required: true })
  integrationStatus: string;

  @Prop({ required: true })
  dataMapping: string;
}

export const LaboratorySchema = SchemaFactory.createForClass(Laboratory);
