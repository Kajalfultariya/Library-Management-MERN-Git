import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    enrollmentId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        required: true
    },
    totalBorrowed: {
        type: Number,
        required: false
    },
    activeBorrows: {
        type: [mongoose.Schema.Types.Mixed],
        required: false
    },
})

export default mongoose.model("Students", userScheme)