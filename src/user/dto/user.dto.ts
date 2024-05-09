import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsMongoId, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Types } from 'mongoose';

export class CreateUserDto {
  @ApiProperty({ description: 'Unique identifier for the user' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ description: 'Password for the user', minimum: 8 })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ description: 'Email address of the user', required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ description: 'Full name of the user', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'Contact number of the user', required: false })
  @IsString()
  @IsOptional()
  contactNumber?: string;

  @ApiProperty({ description: 'Address of the user', required: false })
  @IsString()
  @IsOptional()
  Address?: string;

  @ApiProperty({ description: 'City', required: false })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({ description: 'State', required: false })
  @IsString()
  @IsOptional()
  state?: string;

  @ApiProperty({ description: 'Country', required: false })
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty({ description: 'Pin code', required: false })
  @IsString()
  @IsOptional()
  pinCode?: string;

  @ApiProperty({ description: 'Associated hospital', required: false })
  @IsMongoId()
  @IsOptional()
  hospital?: Types.ObjectId;

  @ApiProperty({ description: 'Role', required: false })
  @IsMongoId()
  @IsOptional()
  role?: Types.ObjectId;

  @ApiProperty({ description: 'Designation', required: false })
  @IsMongoId()
  @IsOptional()
  Designation?: Types.ObjectId;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
