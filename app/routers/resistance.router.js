import { Router } from "express";
import resistanceController from "../controllers/resistance.controller.js";
import { controllerWrapper as cw } from "../middlewares/controllerWrapper.middleware.js";

export const router = Router();

router.get("/resistances", cw(resistanceController.getAllResistance));
router.get("/resistance/:id", cw(resistanceController.GetOneResistance));
