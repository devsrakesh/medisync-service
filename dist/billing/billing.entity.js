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
exports.BillingSchema = exports.Billing = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class InsuranceInfo {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InsuranceInfo.prototype, "companyName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InsuranceInfo.prototype, "policyNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InsuranceInfo.prototype, "coverageDetails", void 0);
let Billing = class Billing {
};
exports.Billing = Billing;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Billing.prototype, "patientFullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Billing.prototype, "patientId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: InsuranceInfo }),
    __metadata("design:type", InsuranceInfo)
], Billing.prototype, "insuranceInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Billing.prototype, "dateOfService", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Billing.prototype, "serviceDescription", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Billing.prototype, "serviceCharges", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Billing.prototype, "totalAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['pending', 'paid', 'partially_paid'] }),
    __metadata("design:type", String)
], Billing.prototype, "paymentStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Billing.prototype, "paymentMethod", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: [{ paymentDate: Date, paymentAmount: Number, paymentMethod: String, transactionId: String, paymentStatus: String }],
    }),
    __metadata("design:type", Array)
], Billing.prototype, "paymentTransactions", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Billing.prototype, "invoiceNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Billing.prototype, "invoiceDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Billing.prototype, "dueDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [{ description: String, amount: Number }] }),
    __metadata("design:type", Array)
], Billing.prototype, "itemizedCharges", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Billing.prototype, "totalAmountDue", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Billing.prototype, "statementDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Billing.prototype, "statementPeriod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [{ period: String, revenueGenerated: Number }] }),
    __metadata("design:type", Array)
], Billing.prototype, "revenueReports", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [{ period: String, outstandingPayments: Number }] }),
    __metadata("design:type", Array)
], Billing.prototype, "accountsReceivableReports", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: [{ paymentDate: Date, amountReceived: Number, payer: String }] }),
    __metadata("design:type", Array)
], Billing.prototype, "paymentHistory", void 0);
exports.Billing = Billing = __decorate([
    (0, mongoose_1.Schema)()
], Billing);
exports.BillingSchema = mongoose_1.SchemaFactory.createForClass(Billing);
//# sourceMappingURL=billing.entity.js.map