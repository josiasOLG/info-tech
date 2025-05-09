import { prop, getModelForClass } from "@typegoose/typegoose";

export class VehicleModelClass {
  @prop({ required: true, unique: true }) plate!: string;
  @prop({ required: true }) chassis!: string;
  @prop({ required: true }) renavam!: string;
  @prop({ required: true }) model!: string;
  @prop({ required: true }) brand!: string;
  @prop({ required: true }) year!: number;
}

export const VehicleModel = getModelForClass(VehicleModelClass, {
  schemaOptions: { collection: "vehicles" },
});
