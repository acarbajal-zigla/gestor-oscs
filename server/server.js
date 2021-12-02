const PORT = 5000;

const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log(`Application started and Listening on port ${PORT}`);
});

app.use(express.static(__dirname));
app.engine('html', engine);

app.get("/", (req, res) => {
  res.render(__dirname + "views/index");
});
