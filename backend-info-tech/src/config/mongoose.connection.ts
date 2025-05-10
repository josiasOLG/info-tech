import mongoose from 'mongoose';

export function connectionFactory(
  connection: mongoose.Connection,
): mongoose.Connection {
  connection.on('connected', () => {
    console.log('[MONGO] ✅ Conectado com sucesso');
  });

  connection.on('disconnected', () => {
    console.warn('[MONGO] ⚠️ Desconectado do MongoDB');
  });

  connection.on('reconnected', () => {
    console.log('[MONGO] 🔁 Reconectado ao MongoDB');
  });

  connection.on('error', (error: any) => {
    console.error('[MONGO] ❌ Erro de conexão:', error.message);
  });

  return connection;
}
