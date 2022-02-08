const functions = require("firebase-functions");

const next = require("next");

const app = next.default({ dev: true, conf: { distDir: ".next" } });

const handler = app.getRequestHandler();

exports.nextjs = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handler(req, res));
});

console.log("=============================");
