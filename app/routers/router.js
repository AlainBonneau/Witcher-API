import { Router } from "express";
import { router as monsterRouter } from "./monster.router.js";

export const router = Router();

router.use(monsterRouter);
