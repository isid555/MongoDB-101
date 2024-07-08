const router = require("express").Router();
const userController = require("../controllers/userControllers");


router.post("/", userController.createUser);

router.get("/",userController.getAllUsers)

module.exports = router

