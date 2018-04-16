const model = require("../models/blogs")

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
  console.log("controller working")
  const newBlog = model.create(req.body, (res, err) => {
    if (err) {
      return next({
        status: 404,
        message: "Please fill out appropriate forms."
      })
    }
    res.status(200).json({
      newBlog
    })
  })
}

module.exports = {
  getAll,
  getById,
  create
}
