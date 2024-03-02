import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
    name: String,
    date: String,
    by: String,
    img: String,
    description: String,
    city: String,
    pincode: String,
    completed: {
        type: Boolean,
        default: "false"
    },
})

const Campaign = mongoose.model("Campaign", campaignSchema);

export default Campaign;