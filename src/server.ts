import express from "express";
import { api } from "./routes/index.route";
import { errorHandler } from "./middleware/error-handler";
import swaggerJSDoc from "swagger-jsdoc";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

const server = () => {
  const app = express();
  const port = process.env.PORT || 3000;
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", api);
  // const swaggerDocument = YAML.load(
  //   "/Users/zyrex/Documents/dohoro/node-express/swagger/doc.yaml",
  // );
  // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(errorHandler);
  // app.listen(port, () => {
  //   console.log("Send and receive form localhost:3000");
  // });
  return app;
};
export default server;
