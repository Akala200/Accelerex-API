import { Router } from "express";
import scheduleController from "../controllers/schedule/ScheduleController";

const router = Router();

const { createSchedule, getAllschedules,  getOneschedule  } = scheduleController;

// Routes
router.post("/create/schedule", createSchedule);
router.get("/schedules", getAllschedules);
router.get("/schedule", getOneschedule);



export default router;