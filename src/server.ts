import express, { } from 'express';
import { api } from './routes/index.route';
import { errorHandler } from './middleware/error-handler';

const server = () => {
  const app = express();
  const port = process.env.PORT || 3000;
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(api)
  app.use(errorHandler)
  app.listen(port, () => {
    console.log("Send and receive form localhost:3000")
  })
  return app
}
export default server
