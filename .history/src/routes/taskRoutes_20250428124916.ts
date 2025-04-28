import { Router } from 'express'
import { taskController } from '../controllers/taskController'

export const taskRoutes = Router()

taskRoutes.get('/', taskController.getAll)
taskRoutes.post('/', taskController.create)
taskRoutes.put('/:id', taskController.update)
taskRoutes.delete('/:id', taskController.delete)