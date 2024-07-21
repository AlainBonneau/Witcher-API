import { Router } from "express";
import monsterController from "../controllers/monster.controller.js";

export const router = Router();

router.get("/monstre", monsterController.getAllMonster);
router.get("/monstre/:id", monsterController.getMonsterById);
router.patch("/monstre/:id", monsterController.updateMonster);
router.post("/monstre", monsterController.createMonster);
