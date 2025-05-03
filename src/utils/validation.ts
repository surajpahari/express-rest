
import { Request, Response, NextFunction } from 'express';

export const validateData = (schema: Zod.AnyZodObject) => {
  return (req: Request, _: Response, next: NextFunction) => {
    try {
      console.log(req.body)
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      next(error)
    }
  };
}

export const validateQuery = (schema: Zod.AnyZodObject) => {
  return (req: Request, _: Response, next: NextFunction) => {
    try {
      req.parsedQuery = schema.parse(req.query)
      next();
    } catch (error) {
      next(error);
    }
  };
};

export const validateParams = (schema: Zod.AnyZodObject) => {
  return (req: Request, _: Response, next: NextFunction) => {
    try {
      req.params = schema.parse(req.params);
      next();
    } catch (error) {
      next(error)
    }
  };
}

