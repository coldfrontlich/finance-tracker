import { initTRPC } from '@trpc/server'

const transactions = [
  {
    id: 1,
    category: 'Health',
  },
  {
    id: 2,
    category: 'Health',
  },
  {
    id: 3,
    category: 'Products',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getTransactions: trpc.procedure.query(() => {
    return { transactions }
  }),
})

export type TrpcRouter = typeof trpcRouter