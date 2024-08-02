import { Router } from "express";
import breedController from "../controllers/breed.controller.js";
import { controllerWrapper as cw } from "../middlewares/controllerWrapper.middleware.js";

export const router = Router();

router.get("/races", cw(breedController.getAllBreed));
router.get("/race/:id", cw(breedController.getBreedById));
