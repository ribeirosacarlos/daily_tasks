import { Request, Response } from 'express'
import { taskService } from '../services/taskService'
import { z } from 'zod'

export const taskConstroller = {
    async getAll(req: Request, res: Response) {
        const tasks = await taskService.getAll()
        res.json(tasks)
    },

    async create(req: Request, res: Response) {
        const createTaskSchema = z.object({
            name: z.string().min(1),
            
        })
    }

}