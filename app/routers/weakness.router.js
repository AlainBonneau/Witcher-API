import { Router } from "express";
import weaknessController from "../controllers/weakness.controller.js";
import { controllerWrapper as cw } from "../middlewares/controllerWrapper.middleware.js";

export const router = Router();

router.get("/faiblesses", cw(weaknessController.getAllWeakness));
router.get("/faiblesse/:id", cw(weaknessController.getOneWeakness));
