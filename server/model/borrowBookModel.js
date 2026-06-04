import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    bookId: {
        type: Number,
        required: true
    },
    borrowDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: false
    }
})

export default mongoose.model("Booksborrowdetails", userScheme)