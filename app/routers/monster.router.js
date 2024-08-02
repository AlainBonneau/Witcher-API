import { Router } from "express";
import monsterController from "../controllers/monster.controller.js";
import { controllerWrapper as cw } from "../middlewares/controllerWrapper.middleware.js";

export const router = Router();

router.get("/monstres", cw(monsterController.getAllMonster));
router.get("/monstre/:id", cw(monsterController.getMonsterById));
router.patch("/monstre/:id", cw(monsterController.updateMonster));
router.post("/monstre", cw(monsterController.createMonster));
router.delete("/monstre/:id", cw(monsterController.deleteMonster));
