import Booksborrowdetails from "../model/borrowBookModel.js";

export const fetchBook = async (req, res) => {
    try {
        const users = await Booksborrowdetails.find();
        if (users.length === 0) {
            return res.status(400).json({ messsage: "User not found." })
        }
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error." })
    }
}


//get data by id
export const fetchBookOne = async (req, res) => {
    try {
       
        const record = await Booksborrowdetails.findById(req.params.id);
        if (!record) return res.status(404).send("Not found");
        res.json(record);
    } catch (err) {
        res.status(500).send(err);
    }
}

//post data
//posting data
export const createBook = async (req, res) => {
    try {
      
        const userData = new Booksborrowdetails(req.body)
//        console.log("body", req.body)
        if (!userData) {
            return res.status(404).json({ msg: "User not found" })
        }
        const savedData = await userData.save()
        res.status(200).json(savedData)
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
}

//update data

export const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await Booksborrowdetails.findOne({ _id: id })
        if (!userExist) {
            return res.status(404).json({ message: "User not found." })
        }
        const updateUser = await Booksborrowdetails.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({ error: " Internal Server Error. " })
    }
}


//delete data
export const deleteUserBook = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await Booksborrowdetails.findOne({ _id: id })
        if (!userExist) {
            return res.status(404).json({ message: " User Not Found. " })
        }
        await Booksborrowdetails.findByIdAndDelete(id);
        res.status(201).json({ message: " User deleted Successfully." })
    } catch (error) {
        res.status(500).json({ error: " Internal Server Error. " })
    }
}
