const functions = require("firebase-functions");

const next = require("next");

const app = next.default({ dev: true, conf: { distDir: ".next" } });

const handler = app.getRequestHandler();
console.log("0=============================");

const init = app.prepare();

exports.nextjs = functions.https.onRequest((req, res) => {
  return init.then(() => handler(req, res));
});

console.log("1=============================");
