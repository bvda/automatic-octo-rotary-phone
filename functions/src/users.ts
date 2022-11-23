import * as express from 'express';
import { Request, Response, json } from 'express';
import * as admin from 'firebase-admin';

const app = express();

app.use(json());

app.get('/', (req: Request, res: Response) => {
  res.json([])
});

app.post('/', async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const ref = admin.firestore().collection('user').doc();
  const user = { name, email, uid: ref.id }
  await admin.firestore().doc(ref.path).set(user);
  res.json(user)
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