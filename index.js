const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000 || process.env.PORT;
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
    secret: `${process.env.SECRET_KEY} --  Loaded from .env file / environment variable`,
    routes: ["/create", "/read", "/update", "/delete"],
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
