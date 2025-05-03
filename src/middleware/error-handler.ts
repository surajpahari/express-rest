
import { NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import { Prisma } from "@prisma/client"
import { Request, Response } from "express"
import { ZodError } from "zod"

export const errorHandler = (error: any, _eq: Request, res: Response, next: NextFunction) => {
  if (error instanceof ZodError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: "Input Validation Failed.",
      error: error.errors
    })
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    res.status(StatusCodes.CONFLICT).json({
      message: "DB Contraint Voilation.",
      error: error.message
    })
  }
  res.status(StatusCodes.CONFLICT).json({
    message: "Internal server Error",
    error: error.message
  })
  next()

}
