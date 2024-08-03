import { Router } from "express";
import { router as monsterRouter } from "./monster.router.js";
import { router as breedRouter } from "./breed.router.js";
import { router as resistanceRouter } from "./resistance.router.js";
import { router as weaknessRouter } from "./weakness.router.js";
import { router as locationRouter } from "./location.router.js";

export const router = Router();

router.use(monsterRouter);
router.use(breedRouter);
router.use(resistanceRouter);
router.use(weaknessRouter);
router.use(locationRouter);
