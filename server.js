const next = require("next");

const app = next.default({ dev: true, isNextDevCommand: true });

app.prepare();

const http = require("http");
const handler = app.getRequestHandler();

const server = http.createServer((req, res) => {
  handler(req, res);
});

server.listen(3000, () => console.log("http://localhost:3000"));
