import express from "express";

import countryController from "../controllers/countryController";


const router = express.Router();


router.get("/", async (req, res) => {
    const result = await countryController.getAll(req.app.locals.db);
    if (result) {
        res.json({ "countries": result });
        return;
    }
    res.json({ "message": "No countries found." });
    return;
});

router.get("/:id", (req, res) => {
    res.json({ "message": "A specific country", "id": req.params.id});
});


export default router;
