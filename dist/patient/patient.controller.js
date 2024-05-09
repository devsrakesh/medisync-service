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
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const patient_service_1 = require("./patient.service");
const patient_dto_1 = require("./patient.dto");
let PatientController = class PatientController {
    constructor(patientService) {
        this.patientService = patientService;
    }
    async findAll(page = 1, pageSize = 10, sortField = 'createdAt', sortOrder = 'desc') {
        return await this.patientService.findAll(page, pageSize, sortField, sortOrder);
    }
    async findById(id) {
        const patient = await this.patientService.findById(id);
        if (!patient) {
            throw new common_1.NotFoundException(`Patient with ID ${id} not found`);
        }
        return patient;
    }
    async create(createPatientDto) {
        try {
            return await this.patientService.create(createPatientDto);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error creating patient: ${error.message}`);
        }
    }
    async update(id, updatePatientDto) {
        try {
            const updatedPatient = await this.patientService.update(id, updatePatientDto);
            if (!updatedPatient) {
                throw new common_1.NotFoundException(`Patient with ID ${id} not found`);
            }
            return updatedPatient;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error updating patient: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const deletedPatient = await this.patientService.remove(id);
            if (!deletedPatient) {
                throw new common_1.NotFoundException(`Patient with ID ${id} not found`);
            }
            return deletedPatient;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error deleting patient: ${error.message}`);
        }
    }
};
exports.PatientController = PatientController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Query)('sortField')),
    __param(3, (0, common_1.Query)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patient_dto_1.CreatePatientDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, patient_dto_1.UpdatePatientDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "remove", null);
exports.PatientController = PatientController = __decorate([
    (0, common_1.Controller)('patients'),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], PatientController);
//# sourceMappingURL=patient.controller.js.map