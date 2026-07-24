const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

const registerController = async (req, res) => {
  const { username, email,fullname, password} = req.body

  const isValidEmail = await userModel.findOne({ email })

  if(isValidEmail){
    return res.status(409).json({
      message: "email already exists"
    })
  }

  const salt = crypto.randomBytes(16).toString("hex")
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString("hex")

  const user = await userModel.create({
    username,
    email,
    password: `${salt}:${hashedPassword}`,
    fullname
  })

  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET)

  res.cookie("jwt_token",token)

  res.status(201).json({
    message: "user registered successfully",
    user: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                profileImage: user.profileImage
            }
  })


}

const loginController = async (req, res) => {

  const { username, email, password } = req.body

  const user = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  }).select("+password")

  if (!user) {
    return res.status(409).json({
      message: "user not found"
    })
  }

  const salt = user.password.split(":")[0]
  const hashedPassword = user.password.split(":")[1]

  const currenthashPassword = crypto.scryptSync(password, salt, 64).toString("hex")

  if (!(hashedPassword === currenthashPassword)) {
    return res.status(401).json({
      message: "incorrect password"
    })
  }

  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET)

  res.cookie("jwt_token", token)

  res.json({
    message: "logged in successfully",
    user: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                profileImage: user.profileImage
            }
  })

}

module.exports = {
  registerController,
  loginController
}