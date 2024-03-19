import express from "express";



const PORT: number = 5000;

const app = express();


app.listen(PORT, () => {
    console.info("Server running on port", PORT);
});
