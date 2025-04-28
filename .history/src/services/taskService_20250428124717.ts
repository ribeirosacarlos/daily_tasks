import { prisma } from '../lib/prisma'

export const taskService = {
    async getAll() {
        return prisma.task.findMany()
    },

    async create(data: { name: string; description?: string})     {
        return prisma.task.create({ data })
    },

    async update(id: string, data: { name?: string; description?: string; status?: 'PENDING' | 'DONE' }) {
        return prisma.task.update({
            where: { id },
            data,
        })
    },

    async delete(id: string) {
        return prisma.task.delete({
            where: { id },
        })
    }
}