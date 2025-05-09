import { Router } from "express";
import { UserController } from "./UserController";

const router = Router();

router.post("/", UserController.create);
router.get("/", UserController.list);

export const userRoutes = router;
