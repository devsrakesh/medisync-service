"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanResourcesModule = void 0;
const common_1 = require("@nestjs/common");
const human_resources_service_1 = require("./human-resources.service");
const human_resources_controller_1 = require("./human-resources.controller");
const mongoose_1 = require("@nestjs/mongoose");
const human_resources_entity_1 = require("./human-resources.entity");
let HumanResourcesModule = class HumanResourcesModule {
};
exports.HumanResourcesModule = HumanResourcesModule;
exports.HumanResourcesModule = HumanResourcesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: human_resources_entity_1.HumanResources.name, schema: human_resources_entity_1.HumanResourcesSchema }])],
        controllers: [human_resources_controller_1.HumanResourcesController],
        providers: [human_resources_service_1.HumanResourcesService],
    })
], HumanResourcesModule);
//# sourceMappingURL=human-resources.module.js.map