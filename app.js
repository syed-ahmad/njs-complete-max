const http = require('http');

const server = http.createServer(
  // Register event listener
  // Nodejs register single thread (behind the scenes it uses multi-threading)
  (req, res) => {
  console.log(req);
  // Exit / kill event loop
  process.exit();
});

server.listen(3000);