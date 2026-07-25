const ImageKit = require('@imagekit/nodejs');
const { toFile} = require("@imagekit/nodejs");
const postModel = require('../model/post.model');

const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'],
});

const createPostController = async (req, res) => {
  const {caption} = req.body

  const decoded = req.user


  const imageFile = await client.files.upload({
    file: await toFile(req.file.buffer, req.file.originalname),
    fileName: req.file.originalname,
    folder: "insta-clone"
  })

  const post = await postModel.create({
    user: decoded.id,
    caption: caption,
    image: imageFile.url
  })

  res.status(201).json({
    message: "post created sucessfully",
    post
  })
}

const getPostController = async (req, res) => {
  const decoded = req.user

  const posts = await postModel.find({
    user: decoded.id
  })

  res.status(201).json({
    posts
  })
}

const getPostDetails = async (req, res) => {
  const decoded = req.user

  const { postId } = req.params

  let post = null

  try {
    post = await postModel.findById(postId)

    if (decoded.id != post.user) {
      return res.status(409).json({
        message: "Unauthorized access"
      })
    }
  }
  catch (err) {
    return res.status(400).json({
      message: "Post not found!"
    })
  }

  res.status(201).json({
    post
  })
}

const likePostController = async (req, res) => {

}

module.exports = {
  createPostController,
  getPostController,
  getPostDetails,
  likePostController
}