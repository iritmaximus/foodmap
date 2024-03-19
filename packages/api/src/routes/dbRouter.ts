import express from "express";
const router = express.Router();

import dbService from "../services/dbService";


router.get("/init", async (req, res) => {
    console.info("Initializing database tables...");
    await dbService.initTables(req.app.locals.db);
    res.json({ "status": "success" });
});

router.get("/drop", async (req, res) => {
    console.info("Dropping database tables...");
    await dbService.dropTables(req.app.locals.db);
    res.json({ "status": "success" });
});

router.get("/seed", async (req, res) => {
    console.info("Seeding database tables...");
    await dbService.seedDb(req.app.locals.db);
    res.json({ "status": "success" });
});

router.get("/reset", async (req, res) => {
    console.info("Reseting the whole database...");
    await dbService.resetDb(req.app.locals.db);
    res.json({ "status": "success" });
});

export default router;
