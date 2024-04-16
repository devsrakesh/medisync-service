import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HumanResourcesDocument = HumanResources & Document;
class ContactInformation {
  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  address: string;
}

class performanceReviews {
  @Prop()
  date: Date;
  @Prop()
  reviewer: string;

  @Prop()
  comments: string;
}
class payrollTaxInformation {
  @Prop({ required: true })
  taxDeductions: number;

  @Prop({ required: true })
  exemptions: number;

  @Prop({ required: true })
  filingStatus: string;
}

class salaryInformation {
  @Prop({ required: true })
  baseSalary: number;

  @Prop({ required: true })
  allowances: Allowance[];

  @Prop({ required: true })
  deductions: Deduction[];
}

class leaveManagement {
  @Prop({ required: true })
  leaveType: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  reason: string;
}

class EmergencyContact {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  relationship: string;

  @Prop({ required: true })
  contact: string;
}

class Allowance {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  amount: number;
}

class Deduction {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  amount: number;
}

class shiftSchedule {
  @Prop({ required: true })
  shift: string;

  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  endTime: Date;

  @Prop({ required: true })
  workdays: string[];
}

class PerformanceMetric {
  @Prop({ required: true })
  metric: string;

  @Prop({ required: true })
  value: number;
}

class PerformanceImprovementPlan {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  plan: string;
}

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

  @Prop({ required: true, type: ContactInformation })
  contactInformation: ContactInformation;

  @Prop({ required: true, type: EmergencyContact })
  emergencyContact: EmergencyContact;

  @Prop({ required: true })
  jobTitle: string;

  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  employmentStatus: string;

  @Prop({ required: true })
  dateOfJoining: Date;

  // Scheduling
  @Prop({ required: true, type: shiftSchedule })
  shiftSchedule: shiftSchedule[];

  @Prop({ required: true, type: leaveManagement })
  leaveManagement: leaveManagement[];

  // Payroll
  @Prop({ required: true, type: salaryInformation })
  salaryInformation: salaryInformation;

  @Prop({ required: true })
  payrollPeriod: string;

  @Prop({ required: true, type: payrollTaxInformation })
  payrollTaxInformation: payrollTaxInformation;

  @Prop({ required: true })
  paymentMethod: string;

  // Performance Evaluation
  @Prop({ required: true, type: [{ metric: String, value: Number }] })
  performanceMetrics: PerformanceMetric[];

  @Prop({ required: true, type: performanceReviews })
  performanceReviews: performanceReviews[];

  @Prop({ required: true })
  trainingAndDevelopment: string[];

  @Prop({ required: true, type: [PerformanceImprovementPlan] })
  performanceImprovementPlans: PerformanceImprovementPlan[];
}

export const HumanResourcesSchema = SchemaFactory.createForClass(HumanResources);
