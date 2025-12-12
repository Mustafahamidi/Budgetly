import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    amount:{type: Number, required: true, min: 0},
    type:{type: String, enum:['income','expense'], required: true},
    categoryId:{type: mongoose.Schema.Types.ObjectId, ref:"Category", required:true},
    userId:{type: mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    date:{type: Date, default: Date.now},
    note:{type: String}
},{timestamps: true})


const Transaction = mongoose.model("Transaction", transactionSchema)

export default Transaction


