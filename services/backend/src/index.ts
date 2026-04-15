import "reflect-metadata"
import express from "express"
import cors from "cors"

const app = express()

const PORT = 3001;


app.use(express.json())
app.use(cors())

app.get("/", (_req, res) => {
  return res.status(200).send("Hello world!")
})

app.get("/recipes", (_req, res) => {
  return res.status(200).json({ "recipes": ["Salad", "Burgers", "Falafel"] })
})

app.listen(PORT, () => {
  console.log("Listening on port", PORT)
})
