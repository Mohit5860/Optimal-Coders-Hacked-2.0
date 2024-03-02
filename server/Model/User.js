import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    bloodType: {
        type:String,
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    role: {
        type : String,
        enum: ["user", "NGO"],
        default: "user"
    },
    points: Number,
    campaign: [String],
})

const User = mongoose.model("User", UserSchema);

export default User;