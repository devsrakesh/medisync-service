// create-laboratory.dto.ts
import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateLaboratoryDto {
  // Sample Information
  @IsNotEmpty()
  @IsString()
  sampleId: string;

  @IsNotEmpty()
  @IsString()
  patientId: string;

  @IsNotEmpty()
  @IsString()
  sampleType: string;

  @IsNotEmpty()
  @IsDateString()
  collectionDateTime: Date;

  @IsNotEmpty()
  @IsString()
  collectionLocation: string;

  @IsNotEmpty()
  @IsString()
  collector: string;

  @IsNotEmpty()
  @IsString()
  sampleStatus: string;

  // Test Information
  @IsNotEmpty()
  @IsString()
  testId: string;

  @IsNotEmpty()
  @IsString()
  testName: string;

  @IsNotEmpty()
  @IsString()
  testType: string;

  @IsNotEmpty()
  @IsDateString()
  testRequestDate: Date;

  testCompletionDate: Date;

  testResult: string;

  testUnits: string;

  testMethodology: string;

  testInterpretation: string;

  @IsNotEmpty()
  @IsString()
  testStatus: string;

  // Laboratory Equipment and Resources
  @IsNotEmpty()
  @IsString()
  equipmentId: string;

  @IsNotEmpty()
  @IsString()
  equipmentName: string;

  @IsNotEmpty()
  @IsString()
  equipmentType: string;

  @IsNotEmpty()
  @IsString()
  equipmentStatus: string;

  @IsNotEmpty()
  @IsString()
  resourceAvailability: string;

  // Integration with EMR Systems
  @IsNotEmpty()
  @IsString()
  emrId: string;

  @IsNotEmpty()
  @IsString()
  integrationStatus: string;

  @IsNotEmpty()
  @IsString()
  dataMapping: string;
}


export class UpdateLaboratoryDto extends PartialType(CreateLaboratoryDto) {}