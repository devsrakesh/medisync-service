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
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const patient_entity_1 = require("./patient.entity");
let PatientService = class PatientService {
    constructor(patientModel) {
        this.patientModel = patientModel;
    }
    async findAll(page = 1, pageSize = 10, sortField = 'createdAt', sortOrder = 'desc') {
        try {
            const skip = (page - 1) * pageSize;
            const patients = await this.patientModel.aggregate([
                {
                    $sort: { [sortField]: sortOrder === 'asc' ? 1 : -1 },
                },
                {
                    $skip: skip,
                },
                {
                    $limit: pageSize,
                },
            ]);
            const totalPatients = await this.patientModel.countDocuments();
            return {
                status: 200,
                message: 'Patients retrieved successfully',
                data: patients,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error fetching patients: ${error.message}`);
        }
    }
    async findById(id) {
        try {
            const patient = await this.patientModel.findById(id).exec();
            if (!patient) {
                throw new common_1.NotFoundException(`Patient with ID ${id} not found`);
            }
            return {
                status: 200,
                message: 'Patient retrieved successfully',
                data: patient,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error retrieving patient: ${error.message}`);
        }
    }
    async create(createPatientDto) {
        console.log('hello');
        try {
            const newPatient = new this.patientModel(createPatientDto);
            const savedPatient = await newPatient.save();
            return {
                status: 201,
                message: 'Patient created successfully',
                data: savedPatient,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error creating patient: ${error.message}`);
        }
    }
    async update(id, updatePatientDto) {
        try {
            const updatedPatient = await this.patientModel.findByIdAndUpdate(id, updatePatientDto, { new: true }).exec();
            if (!updatedPatient) {
                throw new common_1.NotFoundException(`Patient with ID ${id} not found`);
            }
            return {
                status: 200,
                message: 'Patient updated successfully',
                data: updatedPatient,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error updating patient: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const deletedPatient = await this.patientModel.findByIdAndDelete(id).exec();
            if (!deletedPatient) {
                throw new common_1.NotFoundException(`Patient with ID ${id} not found`);
            }
            return {
                status: 200,
                message: 'Patient deleted successfully',
                data: deletedPatient,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error deleting patient: ${error.message}`);
        }
    }
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(patient_entity_1.Patient.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PatientService);
//# sourceMappingURL=patient.service.js.map