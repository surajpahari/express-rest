//create category
import { z } from 'zod'

const positiveNumberFromString = z
  .string()
  .regex(/^\d+$/, { message: "Must be a positive integer string" })
  .transform((val) => parseInt(val, 10));

export const addCategorySchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const getCategorySchema = z.object({
  page: positiveNumberFromString.default('1'),
  perPage: positiveNumberFromString.default('2'),
  search: z.string().default(''),
  order: z.enum(['asc', 'desc']).default('asc')
});

export const deleteCategorySchema = z.object({
  id: positiveNumberFromString.optional()
})

export const updateCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
});


export type TAddCategorySchema = z.infer<typeof addCategorySchema>
export type TGetCategorySchema = z.infer<typeof getCategorySchema>
export type TDeleteCategorySchema = z.infer<typeof deleteCategorySchema>
export type TUpdateCategorySchema = z.infer<typeof updateCategorySchema>
