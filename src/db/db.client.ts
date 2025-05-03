
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient().$extends({
  name: "findManyAndCount",
  model: {
    $allModels: {
      async findManyAndCount<Model, Args>(this: Model, args: Prisma.Exact<Args, Prisma.Args<Model, 'findMany'>>) {
        return await prisma.$transaction([
          // @ts-expect-error: Type casting to access dynamic model methods in Prisma client extension this.findMany(args),
          this.count({
            //@ts-expect-error
            where: args.where
          }),
          // @ts-expect-error
          this.findMany(args)
        ])

      }
    }

  }
})
export default prisma

