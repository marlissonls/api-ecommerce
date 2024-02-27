// PACKAGES
import compression from "compression";
import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

// MODULES
import * as dbs from "./config/database.json" assert { type: "json" };
import * as models from "./models/index.js";
import routes from "./routes/index.js";

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// ENVIRONMENT
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

// SETUP MONGODB
const dbURI = isProduction ? dbs.default.dbProduction : dbs.default.dbTest;
mongoose.connect(dbURI, { useNewUrlParser: true });

// START
const app = express();

// STATIC FILES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/public", express.static(join(__dirname, "public")));
app.use("/public/images", express.static(join(__dirname, "public/images")));

// SETUP EJS
app.set("view engine", "ejs");

// SETTINGS
if(!isProduction) app.use(morgan("dev"));
app.use(cors());
app.disable('x-powered-by');
app.use(compression());

// SETUP BODY PARSER
app.use(bodyParser.urlencoded({ extended: false, limit: 1.5*1024*1024 }));
app.use(bodyParser.json({ limit: 1.5*1024*1024}));

// ROUTES
app.use("/", routes);

// 404 - ROTA
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

// ROTA - 422, 500, 401
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    if(error.status !== 404) console.warn("Error: ", error.message, new Date());
    res.json({ error });
});

// LISTENING
app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`Listening on http://localhost:${PORT}`);
});