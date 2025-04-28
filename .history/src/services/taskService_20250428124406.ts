import { prisma } from '../lib/prisma'

export const taskService = {
    async getAll() {
        return prisma.task.findMany()
    },

    
}