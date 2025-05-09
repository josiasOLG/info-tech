import { Router } from "express";
import { VehicleController } from "./VehicleController";

const router = Router();
const controller = new VehicleController();

router.post("/", controller.create.bind(controller));

export { router as vehicleRoutes };
