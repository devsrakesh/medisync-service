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
exports.HospitalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hospital_entity_1 = require("./hospital.entity");
let HospitalService = class HospitalService {
    constructor(hospitalModel) {
        this.hospitalModel = hospitalModel;
    }
    async findAll(page = 1, pageSize = 10, sortField = 'createdAt', sortOrder = 'desc') {
        try {
            const skip = (page - 1) * pageSize;
            const hospitals = await this.hospitalModel.aggregate([
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
            const totalHospitals = await this.hospitalModel.countDocuments();
            return {
                status: 200,
                message: 'Hospitals retrieved successfully',
                data: hospitals,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error fetching hospitals: ${error.message}`);
        }
    }
    async findById(id) {
        try {
            const hospital = await this.hospitalModel.findById(id).exec();
            if (!hospital) {
                throw new common_1.NotFoundException(`Hospital with ID ${id} not found`);
            }
            return {
                status: 200,
                message: 'Hospital retrieved successfully',
                data: hospital,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error retrieving hospital: ${error.message}`);
        }
    }
    async create(createHospitalDto) {
        try {
            const newHospital = new this.hospitalModel(createHospitalDto);
            const savedHospital = await newHospital.save();
            return {
                status: 201,
                message: 'Hospital created successfully',
                data: savedHospital,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error creating hospital: ${error.message}`);
        }
    }
    async update(id, updateHospitalDto) {
        try {
            const updatedHospital = await this.hospitalModel.findByIdAndUpdate(id, updateHospitalDto, { new: true }).exec();
            if (!updatedHospital) {
                throw new common_1.NotFoundException(`Hospital with ID ${id} not found`);
            }
            return {
                status: 200,
                message: 'Hospital updated successfully',
                data: updatedHospital,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error updating hospital: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const deletedHospital = await this.hospitalModel.findByIdAndDelete(id).exec();
            if (!deletedHospital) {
                throw new common_1.NotFoundException(`Hospital with ID ${id} not found`);
            }
            return {
                status: 200,
                message: 'Hospital deleted successfully',
                data: deletedHospital,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error deleting hospital: ${error.message}`);
        }
    }
};
exports.HospitalService = HospitalService;
exports.HospitalService = HospitalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hospital_entity_1.Hospital.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HospitalService);
//# sourceMappingURL=hospital.service.js.map