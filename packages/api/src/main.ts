import express from "express";
import cors from "cors";
import morgan from "morgan";

import config from "./utils/config";
import dbRouter from "./routes/dbRouter";
import countryRouter from "./routes/countryRouter";
import foodRouter from "./routes/foodRouter";
import dbController from "./controllers/dbController";


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));


// kill the app if database is not correctly opened
(async () => {
    const db = await dbController.openDb(config.DB_PATH);
    if (!db) {
        console.error("No db gotten, exiting...");
        process.exit(1);
    }
    console.info("Database opened...");
    app.locals.db = db
})();


app.use("/api/countries", countryRouter);
app.use("/api/foods", foodRouter);
app.use("/db", dbRouter);



app.get("/ping", (_req, res) => {
    res.json({"message": "pong"});
});

app.listen(config.PORT, () => {
    console.info("Server running on port", config.PORT);
});
