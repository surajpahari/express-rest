
import { Product } from "../model/product.model";
import {
  TAddProductSchema,
  TDeleteProductSchema,
  TGetProductSchema,
  TUpdateProductSchema
} from "../validation/product.schema";

export const createProduct = async ({ name, description, price, categoryId }: TAddProductSchema) => {
  return await Product.create({ name, description, price, categoryId });
};

export const deleteProduct = async ({ id }: TDeleteProductSchema) => {
  return await Product.delete({ id });
};

export const getProduct = async ({ search, page, perPage, order }: TGetProductSchema) => {
  return await Product.getCountAndAll({
    search,
    page,
    perPage,
    order
  });
};

export const updateProduct = async ({ id, name, description, price, categoryId }: TUpdateProductSchema) => {
  return await Product.update({ id, name, description, price, categoryId });
};
