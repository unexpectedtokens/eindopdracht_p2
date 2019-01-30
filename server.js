const express = require("express");
const app = express();
var port = process.env.port || 4200;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
