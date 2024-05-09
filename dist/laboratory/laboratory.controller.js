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
exports.LaboratoryController = void 0;
const common_1 = require("@nestjs/common");
const laboratory_service_1 = require("./laboratory.service");
const laboratory_dto_1 = require("./laboratory.dto");
let LaboratoryController = class LaboratoryController {
    constructor(laboratoryService) {
        this.laboratoryService = laboratoryService;
    }
    async findAll() {
        return this.laboratoryService.findAll();
    }
    async findById(id) {
        return this.laboratoryService.findById(id);
    }
    async create(createLaboratoryDto) {
        return this.laboratoryService.create(createLaboratoryDto);
    }
    async update(id, updateLaboratoryDto) {
        return this.laboratoryService.update(id, updateLaboratoryDto);
    }
    async remove(id) {
        return this.laboratoryService.remove(id);
    }
};
exports.LaboratoryController = LaboratoryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LaboratoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LaboratoryController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratory_dto_1.CreateLaboratoryDto]),
    __metadata("design:returntype", Promise)
], LaboratoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, laboratory_dto_1.UpdateLaboratoryDto]),
    __metadata("design:returntype", Promise)
], LaboratoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LaboratoryController.prototype, "remove", null);
exports.LaboratoryController = LaboratoryController = __decorate([
    (0, common_1.Controller)('laboratory'),
    __metadata("design:paramtypes", [laboratory_service_1.LaboratoryService])
], LaboratoryController);
//# sourceMappingURL=laboratory.controller.js.map