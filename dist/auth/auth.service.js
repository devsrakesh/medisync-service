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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("../user/entity/user.entity");
let AuthService = class AuthService {
    constructor(userModel, jwt, config) {
        this.userModel = userModel;
        this.jwt = jwt;
        this.config = config;
    }
    async login(dto) {
        const user = await this.userModel.findOne({
            userId: dto.userId,
        });
        if (!user) {
            throw new common_1.ForbiddenException('Unauthorized User');
        }
        const pwMatches = await argon.verify(user.password, dto.password);
        if (!pwMatches) {
            throw new common_1.ForbiddenException('Credential incorrect');
        }
        const accessToken = await this.signToken(user.id, user.userId);
        let data = {
            userId: user.userId,
            _id: user._id,
            accessToken,
        };
        console.log(data);
        return { data, message: 'user logged successfully' };
    }
    async register(dto) {
        const password = dto.password;
        const hash = await argon.hash(password);
        console.log(dto);
        try {
            const oldUser = await this.userModel.findOne({
                userId: dto.userId,
            });
            if (!oldUser) {
                const user = await new this.userModel({
                    userId: dto.userId,
                    password: hash,
                }).save();
                const accessToken = await this.signToken(user.id, user.userId);
                let data = {
                    ...user,
                    accessToken,
                };
                return { data, message: 'user signIn successfully' };
            }
            else {
                throw new common_1.ForbiddenException('Contact Number is already in use');
            }
        }
        catch (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                throw new common_1.ForbiddenException('Contact Number is already in use');
            }
            else {
                throw error;
            }
        }
    }
    async signToken(_id, userId) {
        const payload = {
            sub: _id,
            userId,
        };
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15d',
            secret: this.config.get('JWT_SECRET'),
        });
        return token;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map