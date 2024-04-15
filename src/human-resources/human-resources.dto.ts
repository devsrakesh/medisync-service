// create-human-resources.dto.ts
import { IsNotEmpty, IsString, IsDate, IsArray, ValidateNested, IsNumber, IsOptional, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class ContactInformationDto {
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}

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

class AllowanceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}

class DeductionDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}

class ShiftScheduleDto {
  @IsNotEmpty()
  @IsString()
  shift: string;

  @IsNotEmpty()
  @IsDate()
  startTime: Date;

  @IsNotEmpty()
  @IsDate()
  endTime: Date;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  workdays: string[];
}

class LeaveManagementDto {
  @IsNotEmpty()
  @IsString()
  leaveType: string;

  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  endDate: Date;

  @IsOptional()
  @IsString()
  reason?: string;
}

class PerformanceMetricDto {
  @IsNotEmpty()
  @IsString()
  metric: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;
}

class PerformanceReviewDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  reviewer: string;

  @IsOptional()
  @IsString()
  comments?: string;
}

class PerformanceImprovementPlanDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  plan: string;
}

export class CreateHumanResourcesDto {
  // Staff Information
  @IsNotEmpty()
  @IsString()
  employeeId: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsDate()
  dateOfBirth: Date;

  @ValidateNested()
  @Type(() => ContactInformationDto)
  contactInformation: ContactInformationDto;

  @ValidateNested()
  @Type(() => EmergencyContactDto)
  emergencyContact: EmergencyContactDto;

  @IsNotEmpty()
  @IsString()
  jobTitle: string;

  @IsNotEmpty()
  @IsString()
  department: string;

  @IsNotEmpty()
  @IsString()
  employmentStatus: string;

  @IsNotEmpty()
  @IsDate()
  dateOfJoining: Date;

  // Scheduling
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ShiftScheduleDto)
  shiftSchedule?: ShiftScheduleDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LeaveManagementDto)
  leaveManagement?: LeaveManagementDto[];

  // Payroll
  @IsOptional()
  @IsObject()
  salaryInformation?: {
    baseSalary: number;
    allowances: AllowanceDto[];
    deductions: DeductionDto[];
  };

  @IsNotEmpty()
  @IsString()
  payrollPeriod: string;

  @IsNotEmpty()
  @IsObject()
  payrollTaxInformation: {
    taxDeductions: number;
    exemptions: number;
    filingStatus: string;
  };

  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  // Performance Evaluation
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PerformanceMetricDto)
  performanceMetrics?: PerformanceMetricDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PerformanceReviewDto)
  performanceReviews?: PerformanceReviewDto[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  trainingAndDevelopment?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PerformanceImprovementPlanDto)
  performanceImprovementPlans?: PerformanceImprovementPlanDto[];
}

// update-human-resources.dto.ts


export class UpdateHumanResourcesDto extends PartialType(CreateHumanResourcesDto) {}
