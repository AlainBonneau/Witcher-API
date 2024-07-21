import { Router } from "express";
import monsterController from "../controllers/monster.controller.js";

export const router = Router();

router.get("/monstre", monsterController.getAllMonster);
router.get("/monstre/:id", monsterController.getMonsterById);
router.post("/monstre/:id", monsterController.updateMonster);
