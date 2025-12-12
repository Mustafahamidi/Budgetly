import { Router } from "express";
import Transaction from "../Models/transactionModel.js";
import mongoose from "mongoose";

const transactionRouter = Router()

transactionRouter.post("/", async (req,res,next) => {
    try {
        const {amount,type,categoryId,userId,date,note} = req.body

        if(!amount || !type || !categoryId || !userId){
            return res.status(400).json({message: " amount,type,categoryId and userId are requied fileds"})
        }

        if(!['income','expense'].includes(type)){
            return res.status(400).json({message: "type must be in 'income' or 'expense'"})
        }

        if(amount < 0){
            return res.status(400).json({message: "amount must be in postive number"})
        }

        if(!mongoose.Types.ObjectId.isValid(categoryId) && !mongoose.Types.ObjectId.isValid(userId)){
            return res.status(400).json({message: "Invalid categoryId or userId"})
        }

        const newTransaction = {
            amount,
            type,
            categoryId,
            userId,
            date: date || Date.now(),
            note
        }

        const transaction = new Transaction(newTransaction)
        await transaction.save()

        return res.status(201).json({message:"New Transaction is Added", transaction})
    } catch (error) {
        next(error)
    }
})
// transactionRouter.get("/")
// transactionRouter.get("/:id")
// transactionRouter.put("/:id")
// transactionRouter.delete("/:id")

// const transactionSchema = new mongoose.Schema({
//     amount:{type: Number, required: true, min: 0},
//     type:{type: String, enum:['income','expense'], required: true},
//     categoryId:{type: mongoose.Schema.Types.ObjectId, ref:"Category", required:true},
//     userId:{type: mongoose.Schema.Types.ObjectId, ref:"User", required:true},
//     date:{type: Date, default: Date.now},
//     note:{type: String}
// },{timestamps: true})






export default transactionRouter