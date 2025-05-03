import { NextFunction, Request, Response } from "express";
import * as ProductService from "../service/product.service";
import { StatusCodes } from "http-status-codes";

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await ProductService.createProduct({ ...req.body });
    res.status(StatusCodes.OK).json({
      message: "Successfully Created Product",
      data: data
    });
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await ProductService.getProduct(req.parsedQuery);
    res.status(StatusCodes.OK).json({
      message: "Successfully Fetched Product",
      data: data
    });
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await ProductService.deleteProduct({ ...req.params });
    res.status(StatusCodes.OK).json({
      message: "Successfully Deleted Product",
      data: data
    });
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updated = await ProductService.updateProduct({ ...req.body });
    res.status(StatusCodes.OK).json({
      message: "Successfully Updated Product",
      data: updated
    });
  } catch (err) {
    next(err);
  }
};
