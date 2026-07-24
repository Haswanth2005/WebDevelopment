const express = require("express")
const { createPostController, getPostController } = require("../controller/post.controller")

const postRouter = express.Router()

// @route POST /api/post/
// @desc create a post
// private
postRouter.post("/", createPostController)

// @route GET /api/post/
// @desc get all the posts created by the user
// private
postRouter.get("/", getPostController)


module.exports = postRouter