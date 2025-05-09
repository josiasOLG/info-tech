import { z } from "zod";

export const CreateVehicleSchema = z.object({
  plate: z.string().min(7),
  chassis: z.string(),
  renavam: z.string(),
  model: z.string(),
  brand: z.string(),
  year: z.number().int().min(1900),
});
