import * as functions from "firebase-functions";
import { hello } from "./products";
import { users } from "./users";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// Generated with `firebase init`
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Hello from Express
export const helloExpress = functions.https.onRequest(hello);

// Users
export const user = functions.https.onRequest(users);