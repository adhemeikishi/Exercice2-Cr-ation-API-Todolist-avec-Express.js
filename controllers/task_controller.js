import { getTasks, addTask, removeTask } from '../models/taskModel.js';

export const displayTasks = (req, res) => {
  res.json(getTasks());
};

export const createTask = (req, res) => {
  const { id, title } = req.body;

  if (!id || !title) {
    return res.status(400).json({ message: 'id et title requis' });
  }

  addTask({ id, title });
  res.status(201).json({ message: 'Tâche ajoutée avec succès' });
};

export const deleteTask = (req, res) => {
  const { id } = req.params;
  removeTask(parseInt(id));
  res.json({ message: 'Tâche supprimée avec succès' });
};
