import { body, param } from "express-validator";
import { petExists } from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";

export const createPetValidator = [
    body("name").notEmpty().withMessage("El nombre es requerido"),
    body("description").notEmpty().withMessage("La descripción es requerida"),
    body("age").isInt({ min: 0 }).withMessage("La edad debe ser un número entero positivo"),
    body("type").notEmpty().withMessage("El tipo es requerido"),
    body("email").isEmail().withMessage("El correo del propietario es requerido y debe ser válido"),
    validarCampos,
    handleErrors
];

export const getPetByIdValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("id").custom(petExists),
    validarCampos,
    handleErrors
];

export const updatePetValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("id").custom(petExists),
    body("name").optional().notEmpty().withMessage("El nombre es requerido"),
    body("description").optional().notEmpty().withMessage("La descripción es requerida"),
    body("age").optional().isInt({ min: 0 }).withMessage("La edad debe ser un número entero positivo"),
    body("type").optional().notEmpty().withMessage("El tipo es requerido"),
    validarCampos,
    handleErrors
];

export const deletePetValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("id").custom(petExists),
    validarCampos,
    handleErrors
];
