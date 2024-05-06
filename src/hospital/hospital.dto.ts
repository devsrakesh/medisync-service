import { IsNotEmpty, IsString, IsEmail, IsNumber, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateHospitalDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  registrationId: string; // Unique identifier for the hospital

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsNumber()
  @IsNotEmpty()
  pinCode: number; // ZIP/Postal code

  @IsString()
  @IsNotEmpty()
  phone: string; // Contact phone number

  @IsEmail()
  @IsNotEmpty()
  email: string; // Contact email

  @IsString()
  @IsNotEmpty()
  ContactNumber: string; // Alternative contact number

  @IsOptional()
  @IsString()
  logo?: string; // Optional logo
}

export class UpdateHospitalDto extends PartialType(CreateHospitalDto) {}
