// PACKAGES
import compression from "compression";
import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

// MODULES
import dbs from "./config/database.json";
import models from "./models";
import routes from "./routes";

// ENVIRONMENT
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

// SETUP MONGODB
const dbURI = isProduction ? dbs.dbProduction : dbs.dbTest;
mongoose.connect(dbURI, { useNewUrlParser: true });

// START
const app = express();

// STATIC FILES
app.use("/public", express.static(__dirname + "/public"));
app.use("/public/images", express.static(__dirname + "public/images"));

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
    res.json({ errors: { message: error.message, status: error.status } });
});

// LISTENING
app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`Listening on http://localhost:${PORT}`);
});