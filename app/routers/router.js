import { Router } from "express";
import { router as monsterRouter } from "./monster.router.js";
import { router as breedRouter } from "./breed.router.js";
import { router as resistanceRouter } from "./resistance.router.js";

export const router = Router();

router.use(monsterRouter);
router.use(breedRouter);
router.use(resistanceRouter);
