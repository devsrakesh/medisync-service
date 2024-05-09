// user.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IPermission } from 'src/permissions/entities/permission.entity';

export type UserDocument = User & Document;
@Schema({
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
})
export class User {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  password: string;

  @Prop({})
  email: string;

  @Prop({})
  name: string;

  @Prop({})
  contactNumber: string;

  @Prop({})
  Address: string;

  @Prop({})
  city: string;

  @Prop({})
  state: string;

  @Prop({})
  country: string;

  @Prop({})
  pinCode: string;

  @Prop({ type: Types.ObjectId })
  hospital: Types.ObjectId;

  @Prop({ type: Types.ObjectId })
  role: Types.ObjectId;

  @Prop({ type: Types.ObjectId })
  Designation: Types.ObjectId;

  permissions: IPermission[];

  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;

  @Prop({})
  createdBy: Types.ObjectId;

  @Prop({})
  updatedBy: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('permissions', {
  ref: 'Permission',
  localField: '_id',
  foreignField: 'user',
});
