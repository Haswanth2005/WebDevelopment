const jwt = require("jsonwebtoken")

const identifyUser = async (req, res, next) => {
  const token = req.cookies.jwt_token

  if (!token) {
    return res.status("401").json({
      message: "login to continue"
    })
  }

  let decoded = null

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  }
  catch (err) {
    return res.status(401).json({
      message: "Unauthorized access",
      err
    })
  }

  req.user = decoded

  next()
}

module.exports = identifyUser