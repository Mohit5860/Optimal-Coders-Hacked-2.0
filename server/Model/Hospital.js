import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name : String,
    blood: [{
        type: String,
        units: Number
    }],
    city: String,
    pincode: String,
    role: {
        type : String,
    },
    contact: Number

})

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;