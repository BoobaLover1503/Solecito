const http = require("http");

const keepAlive = http.createServer((req, res) => {
  res.write("Bot is active");
  res.end();
});

keepAlive.listen(3000, () => {
  console.log("Keep alive server running");
});