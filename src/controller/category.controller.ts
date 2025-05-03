import { NextFunction, Request, Response } from "express";
import * as CategoryService from "../service/category.service"
import { StatusCodes } from "http-status-codes";

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await CategoryService.create({ ...req.body });
    res.status(StatusCodes.OK).json({
      message: "Successfully Created Category",
      data: data
    });
  } catch (err) {
    next(err);
  }
};

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.query, "here")
    // console.log(req.parsedQuery)
    const data = await CategoryService.getCategory(req.parsedQuery)
    res.status(StatusCodes.OK).json({
      message: "Successfully Fetched Category",
      data: data
    });
  } catch (err) {
    next(err);
  }
};

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await CategoryService.deleteCategory({ ...req.params })
    res.status(StatusCodes.OK).json({
      message: "Successfully Deleted Category",
      data: data
    });
  } catch (err) {
    next(err);
  }
}



export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updated = await CategoryService.updateCategory({ ...req.body });
    res.status(StatusCodes.OK).json({
      message: "Successfully Updated Category.",
      data: updated
    });
  } catch (e) {
    next(e);
  }
};

