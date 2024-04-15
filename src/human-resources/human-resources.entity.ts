// human-resources.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HumanResourcesDocument = HumanResources & Document;

@Schema()
export class HumanResources {
  // Staff Information
  @Prop({ required: true })
  employeeId: string;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  dateOfBirth: Date;

  @Prop({ required: true })
  contactInformation: {
    phone: string;
    email: string;
    address: string;
  };

  @Prop({ required: true })
  emergencyContact: {
    name: string;
    relationship: string;
    contact: string;
  };

  @Prop({ required: true })
  jobTitle: string;

  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  employmentStatus: string;

  @Prop({ required: true })
  dateOfJoining: Date;

  // Scheduling
  @Prop()
  shiftSchedule: {
    shift: string;
    startTime: Date;
    endTime: Date;
    workdays: string[];
  }[];

  @Prop()
  leaveManagement: {
    leaveType: string;
    startDate: Date;
    endDate: Date;
    reason: string;
  }[];

  // Payroll
  @Prop()
  salaryInformation: {
    baseSalary: number;
    allowances: {
      name: string;
      amount: number;
    }[];
    deductions: {
      name: string;
      amount: number;
    }[];
  };

  @Prop({ required: true })
  payrollPeriod: string;

  @Prop({ required: true })
  payrollTaxInformation: {
    taxDeductions: number;
    exemptions: number;
    filingStatus: string;
  };

  @Prop({ required: true })
  paymentMethod: string;

  // Performance Evaluation
  @Prop()
  performanceMetrics: {
    metric: string;
    value: number;
  }[];

  @Prop()
  performanceReviews: {
    date: Date;
    reviewer: string;
    comments: string;
  }[];

  @Prop()
  trainingAndDevelopment: string[];

  @Prop()
  performanceImprovementPlans: {
    date: Date;
    plan: string;
  }[];
}

export const HumanResourcesSchema = SchemaFactory.createForClass(HumanResources);
