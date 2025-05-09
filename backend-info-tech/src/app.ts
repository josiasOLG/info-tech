import express from "express";
import cors from "cors";
import morgan from "morgan";
import { userRoutes } from "./modules/user";
import { errorHandler } from "./shared";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/users", userRoutes);
app.use(errorHandler);

export default app;
