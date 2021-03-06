import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

export default app;
