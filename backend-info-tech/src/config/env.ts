import { config } from 'dotenv';
import { z } from 'zod';

config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3000),
  MONGO_URI: z.string().url({ message: 'MONGO_URI deve ser uma URL válida' }),
  MONGO_DB_NAME: z.string().min(1, 'MONGO_DB_NAME é obrigatório'),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('Erro nas variáveis de ambiente:', _env.error.format());
  process.exit(1);
}

export const env = _env.data;
