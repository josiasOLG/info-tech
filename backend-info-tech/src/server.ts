import app from "./app";
import { env, connectToMongo } from "./config";

(async () => {
  await connectToMongo(env.MONGO_URI);
  app.listen(env.PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${env.PORT}`);
  });
})();
