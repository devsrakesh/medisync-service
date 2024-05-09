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
exports.PermissionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const permission_decorator_1 = require("../common/decorators/permission.decorator");
let PermissionsService = class PermissionsService {
    constructor(permissionModel) {
        this.permissionModel = permissionModel;
    }
    async create(createPermissionDto) {
        const permission = new this.permissionModel(createPermissionDto);
        try {
            return await permission.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Error creating permission');
        }
    }
    async findAll() {
        return this.permissionModel.find().populate('user').exec();
    }
    async findById(id) {
        const permission = await this.permissionModel.findById(id).exec();
        if (!permission) {
            throw new common_1.NotFoundException(`Permission with id ${id} not found`);
        }
        return permission;
    }
    async delete(id) {
        const result = await this.permissionModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Permission with id ${id} not found`);
        }
    }
};
exports.PermissionsService = PermissionsService;
exports.PermissionsService = PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(permission_decorator_1.Permission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PermissionsService);
//# sourceMappingURL=permissions.service.js.map