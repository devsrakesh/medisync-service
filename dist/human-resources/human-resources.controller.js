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
exports.HumanResourcesController = void 0;
const common_1 = require("@nestjs/common");
const human_resources_service_1 = require("./human-resources.service");
const human_resources_dto_1 = require("./human-resources.dto");
let HumanResourcesController = class HumanResourcesController {
    constructor(humanResourcesService) {
        this.humanResourcesService = humanResourcesService;
    }
    async findAll() {
        return this.humanResourcesService.findAll();
    }
    async findById(id) {
        return this.humanResourcesService.findById(id);
    }
    async create(createHumanResourcesDto) {
        return this.humanResourcesService.create(createHumanResourcesDto);
    }
    async update(id, updateHumanResourcesDto) {
        return this.humanResourcesService.update(id, updateHumanResourcesDto);
    }
    async remove(id) {
        return this.humanResourcesService.remove(id);
    }
};
exports.HumanResourcesController = HumanResourcesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HumanResourcesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HumanResourcesController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [human_resources_dto_1.CreateHumanResourcesDto]),
    __metadata("design:returntype", Promise)
], HumanResourcesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, human_resources_dto_1.UpdateHumanResourcesDto]),
    __metadata("design:returntype", Promise)
], HumanResourcesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HumanResourcesController.prototype, "remove", null);
exports.HumanResourcesController = HumanResourcesController = __decorate([
    (0, common_1.Controller)('human-resources'),
    __metadata("design:paramtypes", [human_resources_service_1.HumanResourcesService])
], HumanResourcesController);
//# sourceMappingURL=human-resources.controller.js.map