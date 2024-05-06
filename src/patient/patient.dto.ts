// create-patient.dto.ts
import { IsNotEmpty, IsString, IsDate, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class EmergencyContactDto {
  @IsString()
  name: string;

  @IsString()
  relationship: string;

  @IsString()
  contact: string;
}

class InsuranceInformationDto {
  @IsString()
  policyNumber: string;

  @IsString()
  company: string;

  @IsString()
  coverageDetails: string;
}

class VitalSignsDto {
  @IsString()
  bloodPressure: string;

  @IsString()
  heartRate: string;

  @IsString()
  respiratoryRate: string;

  @IsString()
  temperature: string;

  @IsString()
  oxygenSaturation: string;
}

class AppointmentScheduleDto {
  @IsDate()
  date: Date;

  @IsString()
  time: string;

  @IsString()
  location: string;
}

class VisitHistoryDto {
  @IsDate()
  date: Date;

  @IsString()
  reason: string;

  @IsString()
  outcome: string;
}

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNotEmpty()
  dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  contactNumber: string;

  @IsNotEmpty()
  @IsString()
  uniqueCode: string;

  @ValidateNested()
  emergencyContact: EmergencyContactDto;

  @ValidateNested()
  insuranceInformation: InsuranceInformationDto;

  preExistingConditions: string[];

  allergies: string[];

  medications: string[];

  surgicalHistory: string[];

  familyMedicalHistory: string[];

  @IsString()
  @IsOptional()
  chiefComplaint?: string;

  @ValidateNested()
  vitalSigns: VitalSignsDto;

  @IsArray()
  @IsOptional()
  @Type(() => AppointmentScheduleDto)
  appointmentSchedule: AppointmentScheduleDto[];

  @IsArray()
  @IsOptional()
  @Type(() => VisitHistoryDto)
  visitHistory?: VisitHistoryDto[];
}

export class UpdatePatientDto extends PartialType(CreatePatientDto) {}
