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
exports.HumanResourcesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const human_resources_entity_1 = require("./human-resources.entity");
let HumanResourcesService = class HumanResourcesService {
    constructor(humanResourcesModel) {
        this.humanResourcesModel = humanResourcesModel;
    }
    async findAll() {
        return this.humanResourcesModel.find().exec();
    }
    async findById(id) {
        return this.humanResourcesModel.findById(id).exec();
    }
    async create(createHumanResourcesDto) {
        const createdHumanResources = new this.humanResourcesModel(createHumanResourcesDto);
        return createdHumanResources.save();
    }
    async update(id, updateHumanResourcesDto) {
        return this.humanResourcesModel.findByIdAndUpdate(id, updateHumanResourcesDto, { new: true }).exec();
    }
    async remove(id) {
        return this.humanResourcesModel.findByIdAndDelete(id).exec();
    }
};
exports.HumanResourcesService = HumanResourcesService;
exports.HumanResourcesService = HumanResourcesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(human_resources_entity_1.HumanResources.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HumanResourcesService);
//# sourceMappingURL=human-resources.service.js.map