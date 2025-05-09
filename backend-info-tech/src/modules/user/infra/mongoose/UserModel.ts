import { getModelForClass, prop } from "@typegoose/typegoose";

export class UserModelClass {
  @prop({ required: true })
  name!: string;

  @prop({ required: true, unique: true })
  email!: string;

  @prop({ required: true })
  password!: string;
}

export const UserModel = getModelForClass(UserModelClass, {
  schemaOptions: { collection: "users" },
});
