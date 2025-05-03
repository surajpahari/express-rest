
// create product
import { z } from 'zod';
import category from '../routes/category.routes';

const positiveNumberFromString = z
  .string()
  .regex(/^\d+$/, { message: "Must be a positive integer string" })
  .transform((val) => parseInt(val, 10));

// Add Product
export const addProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().nonnegative(),
  categoryId: z.number(), // assuming a product belongs to a category
});

// Get Product (pagination, search, ordering)
export const getProductSchema = z.object({
  page: positiveNumberFromString.default('1'),
  perPage: positiveNumberFromString.default('10'),
  search: z.string().default(''),
  order: z.enum(['asc', 'desc']).default('asc'),
  categoryId: positiveNumberFromString.optional() // <-- added
});
// Delete Product
export const deleteProductSchema = z.object({
  id: positiveNumberFromString.optional(),
});

// Update Product
export const updateProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number().nonnegative(),
  categoryId: z.number(),
});

// Types
export type TAddProductSchema = z.infer<typeof addProductSchema>;
export type TGetProductSchema = z.infer<typeof getProductSchema>;
export type TDeleteProductSchema = z.infer<typeof deleteProductSchema>;
export type TUpdateProductSchema = z.infer<typeof updateProductSchema>;
