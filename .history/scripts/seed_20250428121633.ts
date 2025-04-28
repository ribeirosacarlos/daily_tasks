import { prisma } from '../src/lib/prisma'

async function main() {
  const task = await prisma.task.create({
    data: {
      name: 'Minha primeira tarefa de teste',
    },
  })

  console.log('Tarefa criada:', task)
}

main()
  .then(() => {
    console.log('Seed concluído com sucesso.')
    process.exit(0)
  })
  .catch((e) => {
    console.error('Erro ao rodar o seed:', e)
    process.exit(1)
  })
