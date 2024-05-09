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
exports.LaboratoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const laboratory_entity_1 = require("./laboratory.entity");
let LaboratoryService = class LaboratoryService {
    constructor(laboratoryModel) {
        this.laboratoryModel = laboratoryModel;
    }
    async findAll() {
        return this.laboratoryModel.find().exec();
    }
    async findById(id) {
        return this.laboratoryModel.findById(id).exec();
    }
    async create(createLaboratoryDto) {
        const createdLaboratory = new this.laboratoryModel(createLaboratoryDto);
        return createdLaboratory.save();
    }
    async update(id, updateLaboratoryDto) {
        return this.laboratoryModel.findByIdAndUpdate(id, updateLaboratoryDto, { new: true }).exec();
    }
    async remove(id) {
        return this.laboratoryModel.findByIdAndDelete(id).exec();
    }
};
exports.LaboratoryService = LaboratoryService;
exports.LaboratoryService = LaboratoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(laboratory_entity_1.Laboratory.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LaboratoryService);
//# sourceMappingURL=laboratory.service.js.map