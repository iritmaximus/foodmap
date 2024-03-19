import express from "express";


const router = express.Router();


router.get("/", (_req, res) => {
    res.json({ "message": "All countries" });
});

router.get("/:id", (req, res) => {
    res.json({ "message": "A specific country", "id": req.params.id});
});


export default router;
