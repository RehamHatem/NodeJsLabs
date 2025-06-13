const Post = require("../models/postsModel");
const { isValidObjectId } = require("mongoose");

const createPost= async (req, res) => {
  try {
    const { body } = req;
    if (!body.title ) {
      return res.status(400).json({
        status: "Failure",
        message: "there is some missing data",
      });
    }

    const post = await Post.create({
      title: body.title,
      description: body.description,
    });

    res.status(201).json({
      status: "Success",
      message: "post created successfully",
      data: post,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failure",
      message: "Internal server error",
    });
  }
};

const getAllPosts = async (req, res) => {
  const posts = await Post.find({}, { title: 1, description: 1 });

  res.status(200).json({
    status: "Success",
    message: "posts fetched successfully",
    data: posts,
  });
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      status: "Failure",
      message: "Invalid post id",
    });
  }

  const post = await Post.findOne({ _id: id }, { name: 1, email: 1 });

  if (!post) {
    return res.status(404).json({
      status: "Failure",
      message: "post not found",
    });
  }

  res.status(200).json({
    status: "Success",
    message: "post fetched successfully",
    data: post,
  });
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!body.title) {
    return res.status(400).json({
      status: "Failure",
      message: "title is required",
    });
  }

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      status: "Failure",
      message: "Invalid post id",
    });
  }

  const post = await Post.findByIdAndUpdate(
    id,
    { title: body.title },
    { new: true }
  );

  if (!post) {
    return res.status(404).json({
      status: "Failure",
      message: "post not found",
    });
  }

  res.status(200).json({
    status: "Success",
    message: "post updated successfully",
    data: post,
  });
};

const deletePostById = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({
      status: "Failure",
      message: "Invalid post id",
    });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(404).json({
      status: "Failure",
      message: "post not found",
    });
  }

  res.status(204).send();
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
