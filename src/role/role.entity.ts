// role.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRole } from './role.enum';

@Schema()
export class Role {
  @Prop({ required: true })
  name: string;

  @Prop({ enum: UserRole, required: true })
  module: UserRole; // Module for which the role is created (e.g., 'ADMIN', 'SUPER_ADMIN', 'DOCTOR', 'CUSTOM_ROLE')

  @Prop({ default: false })
  canCreate: boolean;

  @Prop({ default: false })
  canRead: boolean;

  @Prop({ default: false })
  canUpdate: boolean;

  @Prop({ default: false })
  canDelete: boolean;
}

export type RoleDocument = Role & Document;
export const RoleSchema = SchemaFactory.createForClass(Role);
