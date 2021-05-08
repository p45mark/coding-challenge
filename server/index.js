import http from "http";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import { getToken } from "./api/getToken.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const port = process.env.PORT || 8888;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/token", async (_, res) => {
  try {
    const data = await getToken();
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

app.use("*", (_, res) => {
  return res.status(404).json({
    success: false,
    message: "API endpoint does not exist",
  });
});

const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {
  console.log(`listening on port ${port}`);
});
