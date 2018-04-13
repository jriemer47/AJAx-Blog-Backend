const model = require("../models/blogs")

getAll = (req, res, next) => {
  console.log("controller working")
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

module.exports = {
  getAll
}
