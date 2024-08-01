import { Router } from "express";
import { router as monsterRouter } from "./monster.router.js";
import { router as breedRouter } from "./breed.router.js";

export const router = Router();

router.use(monsterRouter);
router.use(breedRouter);
