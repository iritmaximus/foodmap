import express from "express";

import foodController from "../controllers/foodController";


const router = express.Router();


router.get("/", async (req, res) => {
    const result = await foodController.getAll(req.app.locals.db);
    if (result) {
        res.json({ "foods": result });
        return;
    }
    res.json({ "message": "No foods found." });
    return;
});

router.get("/:id", (req, res) => {
    res.json({ "message": "A specific food", "id": req.params.id});
});


export default router;
