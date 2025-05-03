//this folder is used for mananging the routes
import express, { Router } from "express";
import category from "./category.routes";
import product from "./product.routes";

export const api: Router = express.Router()

api.use('/category', category)
api.use('/product', product)
