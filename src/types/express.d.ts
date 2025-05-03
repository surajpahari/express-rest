// src/types/express.d.ts
// declare module 'express-serve-static-core' {
//   export interface Request {
//     user: any
//   }
// }
// declare module 'express-serve-static-core' {
//   interface Request {
//     myField?: string
//   }
//   interface Response {
//     myField?: string
//   }
// }
//
import * as express from 'express'
declare global {
  namespace e {
    interface Request {
      parsedQuery?: any
    }
  }
}
