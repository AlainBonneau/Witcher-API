import { Router } from "express";
import weaknessController from "../controllers/weakness.controller.js";

export const router = Router();

router.get("/faiblesses", weaknessController.getAllWeakness);
router.get("/faiblesse/:id", weaknessController.getOneWeakness);
