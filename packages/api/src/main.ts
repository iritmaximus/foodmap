import express from "express";
import cors from "cors";



const PORT: number = 5000;

const app = express();

app.use(cors());


app.listen(PORT, () => {
    console.info("Server running on port", PORT);
});
