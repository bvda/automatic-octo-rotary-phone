import * as functions from 'firebase-functions';
import { HelloWorld } from './hello-world';

setImmediate(() => {
  console.log('Hello, Node.js with TypeScript!')
})

exports.hello = functions.https.onRequest(HelloWorld);