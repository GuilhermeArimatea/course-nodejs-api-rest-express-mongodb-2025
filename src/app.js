import express from "express";
import db from "./config/db.config.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Connected to the database.");
});

const app = express();

app.use(express.json());

app.use(routes);

export default app;
