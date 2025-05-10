import { z } from 'zod';

export const CreateVeiculoSchema = z.object({
  id: z.number(),
  placa: z.string(),
  chassi: z.string(),
  renavam: z.string(),
  modelo: z.string(),
  ano: z.string(),
});
