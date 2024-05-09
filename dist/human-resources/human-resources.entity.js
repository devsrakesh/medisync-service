"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanResourcesSchema = exports.HumanResources = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class ContactInformation {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ContactInformation.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ContactInformation.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ContactInformation.prototype, "address", void 0);
class performanceReviews {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], performanceReviews.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], performanceReviews.prototype, "reviewer", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], performanceReviews.prototype, "comments", void 0);
class payrollTaxInformation {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], payrollTaxInformation.prototype, "taxDeductions", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], payrollTaxInformation.prototype, "exemptions", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], payrollTaxInformation.prototype, "filingStatus", void 0);
class salaryInformation {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], salaryInformation.prototype, "baseSalary", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], salaryInformation.prototype, "allowances", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], salaryInformation.prototype, "deductions", void 0);
class leaveManagement {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], leaveManagement.prototype, "leaveType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], leaveManagement.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], leaveManagement.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], leaveManagement.prototype, "reason", void 0);
class EmergencyContact {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], EmergencyContact.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], EmergencyContact.prototype, "relationship", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], EmergencyContact.prototype, "contact", void 0);
class Allowance {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Allowance.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Allowance.prototype, "amount", void 0);
class Deduction {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Deduction.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Deduction.prototype, "amount", void 0);
class shiftSchedule {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], shiftSchedule.prototype, "shift", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], shiftSchedule.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], shiftSchedule.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], shiftSchedule.prototype, "workdays", void 0);
class PerformanceMetric {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PerformanceMetric.prototype, "metric", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], PerformanceMetric.prototype, "value", void 0);
class PerformanceImprovementPlan {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], PerformanceImprovementPlan.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PerformanceImprovementPlan.prototype, "plan", void 0);
let HumanResources = class HumanResources {
};
exports.HumanResources = HumanResources;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HumanResources.prototype, "employeeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HumanResources.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HumanResources.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], HumanResources.prototype, "dateOfBirth", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: ContactInformation }),
    __metadata("design:type", ContactInformation)
], HumanResources.prototype, "contactInformation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: EmergencyContact }),
    __metadata("design:type", EmergencyContact)
], HumanResources.prototype, "emergencyContact", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HumanResources.prototype, "jobTitle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HumanResources.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HumanResources.prototype, "employmentStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], HumanResources.prototype, "dateOfJoining", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: shiftSchedule }),
    __metadata("design:type", Array)
], HumanResources.prototype, "shiftSchedule", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: leaveManagement }),
    __metadata("design:type", Array)
], HumanResources.prototype, "leaveManagement", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: salaryInformation }),
    __metadata("design:type", salaryInformation)
], HumanResources.prototype, "salaryInformation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HumanResources.prototype, "payrollPeriod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: payrollTaxInformation }),
    __metadata("design:type", payrollTaxInformation)
], HumanResources.prototype, "payrollTaxInformation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], HumanResources.prototype, "paymentMethod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [{ metric: String, value: Number }] }),
    __metadata("design:type", Array)
], HumanResources.prototype, "performanceMetrics", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: performanceReviews }),
    __metadata("design:type", Array)
], HumanResources.prototype, "performanceReviews", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], HumanResources.prototype, "trainingAndDevelopment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [PerformanceImprovementPlan] }),
    __metadata("design:type", Array)
], HumanResources.prototype, "performanceImprovementPlans", void 0);
exports.HumanResources = HumanResources = __decorate([
    (0, mongoose_1.Schema)()
], HumanResources);
exports.HumanResourcesSchema = mongoose_1.SchemaFactory.createForClass(HumanResources);
//# sourceMappingURL=human-resources.entity.js.map