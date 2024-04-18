// user.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({  })
  userName: string;

  @Prop({  })
  email: string;

  @Prop({  })
  password: string;

  @Prop({  })
  contactNumber: string;

  // You can add more fields as needed
}

export const UserSchema = SchemaFactory.createForClass(User);
