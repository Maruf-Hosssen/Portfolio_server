import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use('/', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello maruf!');
});

export default app;
