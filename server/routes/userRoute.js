import express from 'express';
import { create, deleteUser, fetch, fetchOne, update } from '../controller/userController.js';
import { createStudent, deleteUserStudent, fetchStudent, fetchStudentOne, updateStudent } from '../controller/studentController.js';
import { createBook, deleteUserBook, fetchBook, fetchBookOne, updateBook } from '../controller/BooksController.js';

import multer from "multer"
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });


const route = express.Router()

//route.post("/create", upload.single('image'), create)

//book routes
route.post("/create", create)
route.get("/fetch", fetch)
route.get("/fetchone/:id", fetchOne)
route.put("/update/:id", update)
route.delete("/delete/:id", deleteUser)

//students route
route.get("/fetchStudent", fetchStudent)
route.get("/fetchStudentOne/:id", fetchStudentOne)
route.post("/createStudent", createStudent)
route.put("/updateStudent/:id", updateStudent)
route.delete("/deleteStudent/:id", deleteUserStudent)


//borrowbook route
route.get("/fetchBook", fetchBook)
route.get("/fetchBookOne/:id", fetchBookOne)
route.post("/createBook", createBook)
route.put("/updateBook/:id", updateBook)
route.delete("/deleteBook/:id", deleteUserBook)


export default route;