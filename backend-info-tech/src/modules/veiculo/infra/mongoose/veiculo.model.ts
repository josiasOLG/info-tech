import { Schema, Document } from 'mongoose';

export interface VeiculoDocument extends Document {
  _id: string;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  ano: string;
}

export const VeiculoSchema = new Schema({
  placa: { type: String, required: true },
  chassi: { type: String, required: true },
  renavam: { type: String, required: true },
  modelo: { type: String, required: true },
  ano: { type: String, required: true },
});
