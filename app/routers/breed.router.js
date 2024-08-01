import { Router } from "express";
import breedController from "../controllers/breed.controller.js";

export const router = Router();

router.get("/race", breedController.getAllBreed);
router.get("/race/:id", breedController.getBreedById);