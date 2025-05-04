
import { Prisma } from "@prisma/client";
import prisma from "../db/db.client";
import { TGetProductSchema } from "../validation/product.schema";
import { paginatedResponse } from "../utils/pagination/paginatedResponse";

export class Product {
  static async create({ name, description, price, categoryId }: Prisma.ProductUncheckedCreateInput) {
    return await prisma.product.create({
      data: {
        description: description,
        name: name,
        price: price,
        categoryId: categoryId,
      }
    })
  }

  static delete = async ({ id }: Prisma.ProductWhereUniqueInput) => {
    return await prisma.product.delete({
      where: { id }
    });
  };

  static async getCountAndAll({ page, perPage, search, order, categoryId }: TGetProductSchema) {
    const [total, products] = await prisma.product.findManyAndCount({
      skip: (page - 1) * perPage,
      take: perPage,
      where: {
        name: {
          startsWith: search
        }, ...(categoryId ? { categoryId } : {}),
      },
      orderBy: {
        id: order
      },
      include: {
        category: true
      }
    });

    return {
      paginated: paginatedResponse({ total, page, perPage }),
      products
    };
  }

  static async update({ id, name, description, price }: Prisma.ProductUncheckedCreateInput) {
    return await prisma.product.update({
      where: { id: id },
      data: { name, description, price }
    });
  }

}
