// create-patient.dto.ts
import { IsNotEmpty, IsString, IsDate, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class EmergencyContactDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  relationship: string;

  @IsNotEmpty()
  @IsString()
  contact: string;
}

class InsuranceInformationDto {
  @IsNotEmpty()
  @IsString()
  policyNumber: string;

  @IsNotEmpty()
  @IsString()
  company: string;

  @IsNotEmpty()
  @IsString()
  coverageDetails: string;
}

class VitalSignsDto {
  @IsNotEmpty()
  @IsString()
  bloodPressure: string;

  @IsNotEmpty()
  @IsString()
  heartRate: string;

  @IsNotEmpty()
  @IsString()
  respiratoryRate: string;

  @IsNotEmpty()
  @IsString()
  temperature: string;

  @IsNotEmpty()
  @IsString()
  oxygenSaturation: string;
}

class AppointmentScheduleDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsString()
  location: string;
}

class VisitHistoryDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  reason: string;

  @IsNotEmpty()
  @IsString()
  outcome: string;
}

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsDate()
  dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsArray()
  contactInformation: string[];

  @IsNotEmpty()
  @ValidateNested()
  emergencyContact: EmergencyContactDto;

  @IsNotEmpty()
  @ValidateNested()
  insuranceInformation: InsuranceInformationDto;

  preExistingConditions?: string[];

  allergies?: string[];

  medications?: string[];

  surgicalHistory?: string[];

  familyMedicalHistory?: string[];

  @IsNotEmpty()
  @IsString()
  chiefComplaint: string;

  @IsNotEmpty()
  @ValidateNested()
  vitalSigns: VitalSignsDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AppointmentScheduleDto)
  appointmentSchedule?: AppointmentScheduleDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VisitHistoryDto)
  visitHistory?: VisitHistoryDto[];
}

export class UpdatePatientDto extends PartialType(CreatePatientDto) {}
