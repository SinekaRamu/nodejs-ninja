console.log("hello, is there?");
import config from "./config.js";
import express from "express";

const app = express();

app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`);
});
