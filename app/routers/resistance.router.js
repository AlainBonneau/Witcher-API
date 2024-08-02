import { Router } from "express";
import resistanceController from "../controllers/resistance.controller.js";

export const router = Router();

router.get("/resistance", resistanceController.getAllResistance);
router.get("/resistance/:id", resistanceController.GetOneResistance);
