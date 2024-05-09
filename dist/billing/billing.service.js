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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const billing_entity_1 = require("./billing.entity");
let BillingService = class BillingService {
    constructor(billingModel) {
        this.billingModel = billingModel;
    }
    async findAll() {
        return this.billingModel.find().exec();
    }
    async findById(id) {
        return this.billingModel.findById(id).exec();
    }
    async create(createBillingDto) {
        const createdBilling = new this.billingModel(createBillingDto);
        return createdBilling.save();
    }
    async update(id, updateBillingDto) {
        return this.billingModel.findByIdAndUpdate(id, updateBillingDto, { new: true }).exec();
    }
    async remove(id) {
        return this.billingModel.findByIdAndDelete(id).exec();
    }
};
exports.BillingService = BillingService;
exports.BillingService = BillingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(billing_entity_1.Billing.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BillingService);
//# sourceMappingURL=billing.service.js.map