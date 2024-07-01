import express from "express";
const router = express.Router();

import { createTask, getTask } from '../controllers/taskController.js';

router.get("/fetch/tasks", getTask);
router.post("/create/tasks", createTask);

export default router;
