import express from 'express'
import 
{ 
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask
} from '../controllers/tasks.mjs'

const tasksRouter = express.Router()

tasksRouter.route('/').get(getAllTasks).post(createTask) 
tasksRouter.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default tasksRouter
