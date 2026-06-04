import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    available: {
        type: [mongoose.Schema.Types.Mixed],
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: false
    },
})

export default mongoose.model("User", userScheme)