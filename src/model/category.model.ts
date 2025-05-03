import { Prisma } from "@prisma/client";
import prisma from "../db/db.client";
import { paginatedResponse } from "../utils/pagination/paginatedResponse";
import { TGetCategorySchema } from "../validation/category.schema";
export class Category {
  static create = async ({ name, description }: Prisma.CategoryCreateInput) => {
    return await prisma.category.create({
      data: {
        name: name,
        description: description
      }
    })
  }

  static delete = async ({ id }: Prisma.CategoryWhereUniqueInput) => {
    return await prisma.category.delete({
      where: {
        id: id
      }
    })
  }

  static async getCountAndAll({ page, perPage, search, order }: TGetCategorySchema) {
    const [total, categories] = await prisma.category.findManyAndCount({
      skip: (page - 1) * perPage,
      take: perPage,
      where: {
        name: {
          startsWith: search
          // contains: search
        }
      },
      orderBy: {
        id: order
      }
    })
    return {
      paginated: paginatedResponse({ total, page, perPage }),
      categories: categories
    }
  }


  static async update({ id, name, description }: Prisma.CategoryUncheckedCreateInput) {
    return await prisma.category.update({
      where: { id: id },
      data: { name, description }
    });
  }

}
