
import express from "express"
import * as CategoryController from "../controller/category.controller"
import { validateData, validateParams, validateQuery } from "../utils/validation";
import { addCategorySchema, deleteCategorySchema, getCategorySchema, updateCategorySchema } from "../validation/category.schema";

//FROM  api/category .....
const category = express.Router()

category.post(
  "/",
  validateData(addCategorySchema),
  CategoryController.createCategory
);


category.get(
  "/",
  validateQuery(getCategorySchema),
  CategoryController.getCategory
)

category.put(
  "/",
  validateData(updateCategorySchema),
  CategoryController.updateCategory
)

category.delete("/delete/:id",
  validateParams(deleteCategorySchema),
  CategoryController.deleteCategory
)
export default category
