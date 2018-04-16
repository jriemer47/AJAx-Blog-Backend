const model = require("../models/blogs.js")

getAll = (req, res, next) => {
  // console.log("controller working")
  const limit = req.query.limit
  const blogs = model.getAll(limit)

  if (!blogs) {
    return next({
      status: 404,
      message: "Could not find blog posts"
    })
  }
  res.status(200).json({
    blogs
  })
}

getById = (req, res, next) => {
  // console.log("controller working")
  const id = req.params.id
  const blogPosts = model.getById(id)

  if (!blogPosts) {
    return next({
      status: 404,
      message: `No blog with id of ${id}`
    })
  }
  res.status(200).json({
    blogPosts
  })
}

create = (req, res, next) => {
  // console.log("controller working")
  const newBlog = model.create(req.body.title, req.body.content)
  if (newBlog.error) next(result)
  else
    res.status(200).json({
      newBlog,
      message: "created"
    })
}

deletePost = (req, res, next) => {
  // console.log("controller working")
  const blogPosts = model.deletePost(req.params.id)
  if (blogPosts.error) next(blogPosts)
  else {
    res.status(200).json({
      blogPosts
    })
  }
}

module.exports = {
  getAll,
  getById,
  create,
  deletePost
}
