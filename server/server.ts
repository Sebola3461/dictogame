import { config } from "dotenv";
config();

import express, { Handler } from "express";
import path from "path";

const app = express();

app.use("/assets", express.static(path.resolve("./dist/assets/")));
app.use("/public/sound/", express.static(path.resolve("./dist/sound/")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve("./dist/index.html"));
});

app.get("/favicon", (req, res) => {
  res.status(200).sendFile(path.resolve("./public/favicon.ico"));
});

app.get("/banner", (req, res) => {
  res.status(200).sendFile(path.resolve("./public/banner.png"));
});

export const handler: Handler = app;

if (process.env.NODE_ENV == "production") {
  app.listen(process.env.PORT || 5173, () => {
    console.log("App listening on port %s", process.env.PORT || 5173);
  });
}
