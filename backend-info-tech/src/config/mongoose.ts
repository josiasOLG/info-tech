import mongoose from "mongoose";
import { env } from "./env";

export async function connectToMongo(
  uri: string = env.MONGO_URI
): Promise<void> {
  try {
    await mongoose.connect(uri, {
      dbName: env.MONGO_DB_NAME,
      autoIndex: env.NODE_ENV === "development",
    });

    mongoose.connection.on("connected", () => {
      console.log(`MongoDB conectado: ${env.MONGO_DB_NAME}`);
    });

    mongoose.connection.on("error", (err) => {
      console.error("Erro de conexão com o MongoDB:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("Conexão com MongoDB perdida");
    });

    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("Conexão MongoDB encerrada pelo SIGINT");
      process.exit(0);
    });
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
    process.exit(1);
  }
}
