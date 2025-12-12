import express, { urlencoded } from "express"
import { configDotenv } from "dotenv"
import connectDB from "./Config/ConfigDB.js"
import transactionRouter from "./Routes/transactionRoute.js"
import cors from 'cors'

configDotenv()
connectDB()
const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(urlencoded({extended: true}))
app.use(express.json())



app.use("/api/transaction",transactionRouter)

app.use((req,res,next) => {
    res.status(404).json({message: "404 Not Found"})
})


app.use((err,req,res,next) => {
    console.error(err)
    res.status(500).json({message: err.message || "500 Server Error"})
})

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})



