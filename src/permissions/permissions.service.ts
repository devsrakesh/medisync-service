import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Permission } from 'src/common/decorators/permission.decorator';
import { IPermission } from './entities/permission.entity';
import { CreatePermissionDto } from './dto/create-permission.dto';

@Injectable()
export class PermissionsService {
  constructor(@InjectModel(Permission.name) private permissionModel: Model<IPermission>) {}

  async create(createPermissionDto: CreatePermissionDto): Promise<IPermission> {
    const permission = new this.permissionModel(createPermissionDto);
    try {
      return await permission.save();
    } catch (error) {
      throw new BadRequestException('Error creating permission');
    }
  }

  async findAll(): Promise<IPermission[]> {
    return this.permissionModel.find().populate('user').exec();
  }

  async findById(id: string): Promise<IPermission> {
    const permission = await this.permissionModel.findById(id).exec();
    if (!permission) {
      throw new NotFoundException(`Permission with id ${id} not found`);
    }
    return permission;
  }

  async delete(id: string): Promise<void> {
    const result = await this.permissionModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Permission with id ${id} not found`);
    }
  }
}
