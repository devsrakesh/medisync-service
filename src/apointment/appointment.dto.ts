// create-appointment.dto.ts
import { IsDate, IsNotEmpty, IsString, IsEnum, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsEnum(['consultation', 'diagnostic', 'follow-up'])
  type: string;

  @IsNotEmpty()
  @IsString()
  reason: string;

  @IsNotEmpty()
  patient: string; // This will be the patient's ObjectId

  @IsNotEmpty()
  @IsEnum(['scheduled', 'confirmed', 'canceled', 'completed'])
  status: string;

  @IsNotEmpty()
  @IsBoolean()
  confirmation: boolean;

  additionalNotes?: string;
}

// update-appointment.dto.ts

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {}
