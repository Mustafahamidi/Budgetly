import express from "express"
import { configDotenv } from "dotenv"
configDotenv()

const app = express()
const PORT = process.env.PORT || 8000

app.get('/',(req,res) => {
    res.json({message:"Hello Express"})
})

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})



