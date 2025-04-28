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
            description: z.string().optional(),
        })

        const body = createTaskSchema.parse(req.body)

        const task = await taskService.create(body)
        res.status(201).json(task)
    },

    async update(req: Request, res: Response) {
        const updateTaskSchema = z.object({
            name: z.string().optional(),
            description: z.string().optional(),
            status: z.enum(['PENDING', 'DONE']).optional
        })
    }

}