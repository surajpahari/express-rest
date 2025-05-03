import express from "express";
import * as ProductController from "../controller/product.controller";
import { validateData, validateParams, validateQuery } from "../utils/validation";
import {
  addProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema
} from "../validation/product.schema";

// FROM api/product .....
const product = express.Router();

product.post(
  "/",
  validateData(addProductSchema),
  ProductController.createProduct
);

product.get(
  "/",
  validateQuery(getProductSchema),
  ProductController.getProduct
);

product.put(
  "/",
  validateData(updateProductSchema),
  ProductController.updateProduct
);

product.delete(
  "/delete/:id",
  validateParams(deleteProductSchema),
  ProductController.deleteProduct
);

export default product;
