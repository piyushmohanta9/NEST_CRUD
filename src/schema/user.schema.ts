import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: String;
    
  @Prop()
  name: String;

  @Prop()
  password: String;

  @Prop()
  email: String;

  @Prop()
  phone: Number;
}

export const UserSchema = SchemaFactory.createForClass(User);
