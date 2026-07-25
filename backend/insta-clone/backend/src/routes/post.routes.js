const express = require("express")
const { createPostController, getPostController, getPostDetails, likePostController } = require("../controller/post.controller")
const multer = require("multer")
const identifyUser = require("../middleware/auth.middleware")

const postRouter = express.Router()

const upload = multer({storage: multer.memoryStorage()})

// @route POST /api/post/
// @desc create a post
// private
postRouter.post("/", upload.single("imageFile"), identifyUser, createPostController)

// @route GET /api/post/
// @desc get all the posts created by the user
// private
postRouter.get("/", identifyUser, getPostController)

// @route GET /api/post/details/:postId
// @desc get the details of the post through the postid
// private
postRouter.get("/details/:postId", identifyUser, getPostDetails)


// @route POST /api/post/like/:postID
// @desc like the post through the postId
// private
postRouter.post("/like/:postId", identifyUser, likePostController)

module.exports = postRouter



//like
//unlike