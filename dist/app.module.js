"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const patient_module_1 = require("./patient/patient.module");
const apointment_module_1 = require("./apointment/apointment.module");
const billing_module_1 = require("./billing/billing.module");
const inventory_module_1 = require("./inventory/inventory.module");
const laboratory_module_1 = require("./laboratory/laboratory.module");
const pharmacy_module_1 = require("./pharmacy/pharmacy.module");
const finance_module_1 = require("./finance/finance.module");
const human_resources_module_1 = require("./human-resources/human-resources.module");
const hospital_module_1 = require("./hospital/hospital.module");
const role_module_1 = require("./role/role.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const permissions_module_1 = require("./permissions/permissions.module");
const permission_guard_1 = require("./common/guards/permission.guard");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URL'),
                }),
            }),
            user_module_1.UserModule,
            patient_module_1.PatientModule,
            apointment_module_1.ApointmentModule,
            billing_module_1.BillingModule,
            inventory_module_1.InventoryModule,
            laboratory_module_1.LaboratoryModule,
            pharmacy_module_1.PharmacyModule,
            finance_module_1.FinanceModule,
            human_resources_module_1.HumanResourcesModule,
            hospital_module_1.HospitalModule,
            role_module_1.RoleModule,
            auth_module_1.AuthModule,
            permissions_module_1.PermissionsModule,
        ],
        controllers: [],
        providers: [permission_guard_1.PermissionsGuard],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map