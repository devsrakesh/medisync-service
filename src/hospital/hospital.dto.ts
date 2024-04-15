// hospital.dto.ts
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateHospitalDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  hospitalId: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  logo?: string;
}

export class UpdateHospitalDto {
  @IsString()
  name?: string;

  @IsString()
  hospitalId?: string;

  @IsString()
  address?: string;

  @IsString()
  phone?: string;

  @IsEmail()
  email?: string;

  logo?: string;
}
