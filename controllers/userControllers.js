const UserModel = require("../models/user");


exports.createUser = async (req, res) => {
    await UserModel.create({
        username: req.body.username,
        email : req.body.email,
        password: req.body.password,
        createdAt: Date.now()
    });

    return res.status(201).json({ message: "User Created" });
}


exports.getAllUsers = async(req , res)=>{
    const allUsers = await  UserModel.find({});
    return res.json(allUsers);
}


