const express = require("express")
const { registerController, loginController } = require("../controller/auth.controller")
const identifyUser = require("../middleware/auth.middleware")

const authRouter = express.Router()


// @route POST /api/auth/register
authRouter.post("/register", registerController)

// @route POST /api/auth/login
authRouter.post("/login", loginController)

module.exports = authRouter