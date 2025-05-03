import { Request } from "express";

export interface TGetCategoryQuery extends Request {
  parsedQuery: {
    search?: string,
    page?: number,
    pageNo?: number,
    perPage?: number
    orderBy?: "asc" | "desc"
  }
}
