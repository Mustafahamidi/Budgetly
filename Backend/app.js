import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./Config/ConfigDB.js"

configDotenv()
connectDB()
const app = express()
const PORT = process.env.PORT || 8000

app.get('/',(req,res) => {
    res.json({message:"Hello Express"})
})

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})



