import express from "express";
import scheduleRoutes from "./schedule";

const router = express.Router();
router.use('/restaurant', scheduleRoutes);



export default router;