import { Category } from "../model/category.model"
import { TAddCategorySchema, TDeleteCategorySchema, TGetCategorySchema, TUpdateCategorySchema } from "../validation/category.schema"

export const create = async ({ name, description }: TAddCategorySchema) => {
  return await Category.create({ name: name, description: description })
}

export const deleteCategory = async ({ id }: TDeleteCategorySchema) => {
  return await Category.delete({ id: id })
}

export const getCategory = async ({ search, page, perPage, order }: TGetCategorySchema) => {
  return await Category.getCountAndAll({
    search,
    page,
    perPage,
    order
  })
}

export const updateCategory = async ({ id, name, description }: TUpdateCategorySchema) => {
  return Category.update({ id, name, description });
};
