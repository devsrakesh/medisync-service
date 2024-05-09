import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/entity/user.entity';

export interface IPermission extends Document {
  user: MongooseSchema.Types.ObjectId | User;
  resource: string;
  actions: string[]; // Example: ['CREATE', 'READ', 'UPDATE', 'DELETE']
}

@Schema() // Annotate as Mongoose schema
export class Permission {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  user: MongooseSchema.Types.ObjectId | User;

  @Prop({ required: true })
  resource: string;

  @Prop({
    type: [String],
    required: true,
    validate: {
      validator: (v: string[]) => v.length > 0,
      message: 'At least one action must be specified',
    },
  })
  actions: string[];
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
