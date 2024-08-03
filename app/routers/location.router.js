import { Router } from "express";
import locationController from "../controllers/location.controller.js";
import { controllerWrapper as cw } from "../middlewares/controllerWrapper.middleware.js";

export const router = Router();

router.get("/localisations", cw(locationController.getAllLocation));
router.get("/localisation/:id", cw(locationController.getOneLocation));
