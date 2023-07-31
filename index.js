const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000 || process.env.PORT;
const dotenv = require("dotenv");

dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
    secret: `${process.env.SECRET_KEY} --  Loaded from .env file / environment variable`,
    GET_routes: ["/create", "/read", "/update", "/delete"],
    POST_routes: ["/protected"],
  });
});

app.get("/create", (req, res) => {
  res.json({
    message: "Create route",
  });
});

app.get("/read", (req, res) => {
  res.json({
    message: "Read route",
  });
});

app.get("/update", (req, res) => {
  res.json({
    message: "Update route",
  });
});

app.get("/delete", (req, res) => {
  res.json({
    message: "Delete route",
  });
});

app.post("/protected", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Authorization header required",
    });
  } else {
    return res.status(200).json({
      message: "Protected route",
      secret: `${process.env.SECRET_KEY} --  Loaded from .env file / environment variable`,
      headers: req.headers,
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
