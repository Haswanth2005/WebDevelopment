const express = require("express")
const userModel = require("../model/user.model.js")
const authRouter = express.Router()
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body

  const validateEmail = await userModel.findOne({email})

  if (validateEmail) {
    return res.status(408).json({
      message:"email already exists"
    })
  }

  const salt = crypto.randomBytes(16).toString("hex")
  const hashPassword = crypto.scryptSync(password, salt, 64).toString("hex")


  const user = await userModel.create({
    name: name,
    email: email,
    password: `${salt}:${hashPassword}`
  })

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  )

  res.cookie("jwt_token", token)

  res.status(201).json({
    message: "user created",
    user
  })

})

authRouter.post("/login", async (req, res) => {
  const {email, password} = req.body

  const user = await userModel.findOne({ email })


  if (!user) {
    return res.status(400).json({
      message: "user is not registered on this email"
    })
  }

  const [salt, hashPassword] = user.password.split(":")
  const hash = crypto.scryptSync(password, salt, 64).toString('hex')

  if (!(hash === hashPassword)) {
    return res.status(401).json({
      message: "invalid password"
    })
  }

  const token = jwt.sign({
    id:user._id
  }, process.env.JWT_SECRET)

  res.cookie("jwt_token", token)

  res.status(200).json({
    message: "user logged in",
    user
  })
})

authRouter.get("/me", async (req, res) => {
  const token = req.cookies.jwt_token

  const decoded = jwt.verify(token, process.env.JWT_SECRET)

  const user = await userModel.findOne(decoded._id)

  res.json({
    name: user.name,
    email: user.email
  })
})

module.exports = authRouter