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

app.get('/:uid', async (req: Request, res: Response) => {
  const { uid } = req.params;
  const result = await admin.firestore().collection('user').where('uid', '==', uid).get();
  if (!result.size) {
    res.sendStatus(404);
  } 
  res.json(result.docs[0].data());
});

app.patch('/:uid', (req: Request, res: Response) => {
  res.json({})
});

app.delete('/:uid', async (req: Request, res: Response) => {
  const { uid } = req.params;
  let result;
  try {
    result = await admin.firestore().collection('user').doc(uid).delete({ exists: true });
  } catch(err: unknown) {
    res.sendStatus(404);
  } 
  res.json(result);
});

export const users = app;