// inventory.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
  @Prop({ required: true })
  itemName: string;

  @Prop({ required: true, unique: true })
  itemCode: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  manufacturer: string;

  @Prop()
  supplier: string;

  @Prop({ required: true })
  unitOfMeasurement: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  minimumQuantityThreshold: number;

  @Prop({ required: true })
  unitPrice: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop()
  expiryDate: Date;

  @Prop({ required: true })
  transactionType: string;

  @Prop({ required: true })
  transactionDate: Date;

  @Prop({ required: true })
  transactionQuantity: number;

  @Prop({ required: true })
  transactionUnitPrice: number;

  @Prop({ required: true })
  totalTransactionAmount: number;

  @Prop()
  remarks: string;

  @Prop()
  location: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  availability: boolean;

  @Prop()
  createdBy: string;

  @Prop()
  createdAt: Date;

  @Prop()
  lastModifiedBy: string;

  @Prop()
  lastModifiedAt: Date;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
