import express from 'express';
import { displayTasks, createTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', displayTasks);
router.post('/add', createTask);
router.delete('/remove/:id', deleteTask);

export default router;
