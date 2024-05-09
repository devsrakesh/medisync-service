"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApointmentModule = void 0;
const common_1 = require("@nestjs/common");
const apointment_service_1 = require("./apointment.service");
const apointment_controller_1 = require("./apointment.controller");
const mongoose_1 = require("@nestjs/mongoose");
const appointment_entity_1 = require("./appointment.entity");
let ApointmentModule = class ApointmentModule {
};
exports.ApointmentModule = ApointmentModule;
exports.ApointmentModule = ApointmentModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: appointment_entity_1.Appointment.name, schema: appointment_entity_1.AppointmentSchema }])],
        controllers: [apointment_controller_1.AppointmentController],
        providers: [apointment_service_1.AppointmentService],
    })
], ApointmentModule);
//# sourceMappingURL=apointment.module.js.map