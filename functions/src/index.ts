import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
import { hello } from "./hello";
import { users } from "./users";

admin.initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// Generated with `firebase init`
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

// Hello from Express
export const helloExpress = functions.https.onRequest(hello);

// User endpoint
export const user = functions.https.onRequest(users);

// Triggers
export const userCreated = functions.firestore.document('user/{uid}').onCreate((snapshot, context) => {
  const { eventId } = context;
  const { name, email } = snapshot.data();
  const ref = admin.firestore().collection('log').doc(eventId)
  functions.logger.info('User created', { name: `${name.first} ${name.last}`, email})
  return admin.firestore().doc(ref.path).set({ 
    message: `${ name.first } ${name.last} created an account`, 
    timestamp: admin.firestore.Timestamp.now()
  });
})

export const clearUsers = functions.pubsub.schedule('1 * * * *').onRun(
  (context) => {
    functions.logger.info(`Collection 'user' cleared`, { })
    console.log("Hello, schedule!")
    return null;
  }
)