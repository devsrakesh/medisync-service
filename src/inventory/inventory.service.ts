// inventory.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory, InventoryDocument } from './inventory.entity';
import { CreateInventoryDto, UpdateInventoryDto } from './inventory.dto';

@Injectable()
export class InventoryService {
  constructor(@InjectModel(Inventory.name) private inventoryModel: Model<InventoryDocument>) {}

  async findAll(): Promise<Inventory[]> {
    return this.inventoryModel.find().exec();
  }

  async findById(id: string): Promise<Inventory> {
    return this.inventoryModel.findById(id).exec();
  }

  async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    const createdInventory = new this.inventoryModel(createInventoryDto);
    return createdInventory.save();
  }

  async update(id: string, updateInventoryDto: UpdateInventoryDto): Promise<Inventory> {
    return this.inventoryModel.findByIdAndUpdate(id, updateInventoryDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Inventory> {
    return this.inventoryModel.findByIdAndRemove(id).exec();
  }
}
