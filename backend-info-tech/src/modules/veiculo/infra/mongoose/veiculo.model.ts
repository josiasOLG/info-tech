import { Schema, Document, model } from 'mongoose';

export interface VeiculoDocument extends Document {
  id: number;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  ano: string;
}

export const VeiculoSchema = new Schema({
  id: { type: Number, required: true },
  placa: { type: String, required: true },
  chassi: { type: String, required: true },
  renavam: { type: String, required: true },
  modelo: { type: String, required: true },
  ano: { type: String, required: true },
});

export const VeiculoModel = model<VeiculoDocument>('Veiculo', VeiculoSchema);
