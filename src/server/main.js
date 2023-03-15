import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

const { PORT } = process.env || 8000;

ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port " + PORT)
);
