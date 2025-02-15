const express = require('express');
const {
  createTask,
  getTasks,
  toggleTaskCompletion,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

// Routes
router.post('/tasks', createTask);
router.get('/tasks', getTasks);
router.patch('/tasks/:id/toggle', toggleTaskCompletion);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
