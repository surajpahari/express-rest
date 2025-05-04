import express, { Router } from "express";
import serverless from "serverless-http";
import server from "../../src/server";
// import { api } from "../../src/routes/index.route";

// const api = express();

// const router = Router();
// router.get("/data", (req, res) => {
//   const data = {
//     message: "Hello, world!",
//     status: "success",
//   };
//   res.json(data);
// });
//
// api.use("/api/", router);

export const handler = serverless(server());
