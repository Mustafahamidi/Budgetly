import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{type: String, required: true, unique:true},
    type:{type: String, enum:["income","expense"],required: true},
    userId:{type: mongoose.Schema.Types.ObjectId, ref:"User",required: false}
},{timestamps: true})

const Category = mongoose.model("Category", categorySchema)

export default Category
