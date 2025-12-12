import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"Category" ,required: true},
    limitAmount:{type: Number, required: true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required: true},
    month:{type: Number},
    year:{type: Number}
},{timestamps: true})

const Budget = mongoose.model("Budget",budgetSchema)

export default Budget
