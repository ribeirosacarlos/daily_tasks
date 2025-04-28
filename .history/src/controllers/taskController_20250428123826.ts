import { Request, Response } from 'express'
import { taskService } from '../services/taskService'
import { z } from 'zod'

export const taskConstroller = {
    async getAll(req: Request, res: Response) {
        const tasks = await taskService.getAll()
        res.json(tasks)
    },
}