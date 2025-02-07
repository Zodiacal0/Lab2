import { Router } from "express";
import { saveAppointment , getAppointment , updateAppointment , cancelAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator, cancelAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/getAppointment", 
    getAppointment
);

router.patch(
    "/updateAppointment/:uid",
    updateAppointmentValidator,
    updateAppointment
)

router.patch(
    "/cancelAppointment/:uid",
    cancelAppointmentValidator,
    cancelAppointment
)


export default router;