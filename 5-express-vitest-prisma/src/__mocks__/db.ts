import { PrismaClient } from '@prisma/client'
import { beforeEach,vi } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'



// export const prismaClient ={
//   request:{
//     create:vi.fn(),
//     delete:vi.fn(),
//     findMany:vi.fn()
//   }
// }



// 2
beforeEach(() => {
  mockReset(prismaClient)
})

// 3
export const prismaClient = mockDeep<PrismaClient>()