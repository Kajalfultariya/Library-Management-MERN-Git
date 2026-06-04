import studentModel from "../model/studentModel.js";

//get data
export const fetchStudent = async (req, res) => {
    try {
        const users = await studentModel.find();
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
export const fetchStudentOne = async (req, res) => {
    try {
       
        const record = await studentModel.findById(req.params.id);
        if (!record) return res.status(404).send("Not found");
        res.json(record);
    } catch (err) {
        res.status(500).send(err);
    }
}

//post data
//posting data
export const createStudent = async (req, res) => {
    try {
      
        const userData = new studentModel(req.body)
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

export const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await studentModel.findOne({ _id: id })
        if (!userExist) {
            return res.status(404).json({ message: "User not found." })
        }
        const updateUser = await studentModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({ error: " Internal Server Error. " })
    }
}


//delete data
export const deleteUserStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await studentModel.findOne({ _id: id })
        if (!userExist) {
            return res.status(404).json({ message: " User Not Found. " })
        }
        await studentModel.findByIdAndDelete(id);
        res.status(201).json({ message: " User deleted Successfully." })
    } catch (error) {
        res.status(500).json({ error: " Internal Server Error. " })
    }
}
