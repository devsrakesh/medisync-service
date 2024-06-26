"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingModule = void 0;
const common_1 = require("@nestjs/common");
const billing_service_1 = require("./billing.service");
const billing_controller_1 = require("./billing.controller");
const mongoose_1 = require("@nestjs/mongoose");
const billing_entity_1 = require("./billing.entity");
let BillingModule = class BillingModule {
};
exports.BillingModule = BillingModule;
exports.BillingModule = BillingModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: billing_entity_1.Billing.name, schema: billing_entity_1.BillingSchema }])],
        controllers: [billing_controller_1.BillingController],
        providers: [billing_service_1.BillingService],
    })
], BillingModule);
//# sourceMappingURL=billing.module.js.map