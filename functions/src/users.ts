import * as express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json([])
});

app.post('', (req: Request, res: Response) => {
  res.json({})
});

app.get('/:uid', (req: Request, res: Response) => {
  res.json({});
});

app.patch('/:uid', (req: Request, res: Response) => {
  res.json({})
});

app.delete('/:uid', (req: Request, res: Response) => {
  res.json({})
});

export const users = app;