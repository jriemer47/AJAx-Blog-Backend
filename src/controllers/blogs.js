const model = require("../models/blogs.js")

getAll = (req, res, next) => {
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
  const newBlog = model.create(req.body.title, req.body.content)
  if (newBlog.error) next(result)
  else
    res.status(200).json({
      newBlog
    })
}

deletePost = (req, res, next) => {
  const blogPosts = model.deletePost(req.params.id)
  if (blogPosts.error) next(blogPosts)
  else {
    res.status(200).json({
      blogPosts
    })
  }
}

update = (req, res, next) => {
  // console.log("controller working")
  const post = model.update(req.params.id, req.body)
  // console.log("are we getting here")

  if (!post) {
    return next({
      status: 404,
      message: `No blog with id ${req.params.id}`
    })
  }
  res.status(200).json({
    post
  })
}

module.exports = {
  getAll,
  getById,
  create,
  deletePost,
  update
}
