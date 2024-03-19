import express from "express";
const router = express.Router();

import dbController from "../controllers/dbController";


router.get("/init", async (req, res) => {
    console.info("Initializing database tables...");
    await dbController.initTables(req.app.locals.db);
    res.json({ "status": "success" });
});

router.get("/drop", async (req, res) => {
    console.info("Dropping database tables...");
    await dbController.dropTables(req.app.locals.db);
    res.json({ "status": "success" });
});

router.get("/seed", async (req, res) => {
    console.info("Seeding database tables...");
    await dbController.seedDb(req.app.locals.db);
    res.json({ "status": "success" });
});

router.get("/reset", async (req, res) => {
    console.info("Reseting the whole database...");
    await dbController.resetDb(req.app.locals.db);
    res.json({ "status": "success" });
});

export default router;
