import { Router } from "express";
import { savePet, getPets, searchPet, deletePet } from "./pet.controller.js";
import { createPetValidator, getPetByIdValidator, updatePetValidator, deletePetValidator } from "../middlewares/pet-validators.js";

const router = Router();

router.post("/addPet", createPetValidator, savePet);

router.get("/findPet/:id", getPetByIdValidator, searchPet);

router.get("/", getPets);

router.put("/updatePet/:id", updatePetValidator, savePet);

router.delete("/deletePet/:id", deletePetValidator, deletePet);

export default router;