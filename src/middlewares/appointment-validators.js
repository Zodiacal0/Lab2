import { body , check} from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";

export const createAppointmentValidator = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const getAppointmentIdValidator = [
    body("uidUser").isMongoId().withMessage("This Id isn't valid"),
    validarCampos,
    handleErrors
];


export const updateAppointmentValidator = [
    check("uid").notEmpty().isMongoId().withMessage("This Id isn't valid"),
    check("pet").notEmpty().isMongoId().withMessage("This Id isn't valid"),
    check("user").notEmpty().isMongoId().withMessage("This Id isn't valid"),
    validarCampos,
    handleErrors
];

export const cancelAppointmentValidator = [
    check("uid").notEmpty().isMongoId().withMessage("This Id isn't valid"),
    validarCampos,
    handleErrors
]