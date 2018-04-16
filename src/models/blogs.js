const database = require("../../db/blogs")
const uuid = require("uuid/v4")
const fs = require("fs")

getAll = () => {
  // console.log("models working")
  return database
}

getById = id => {
  // console.log("models working")
  const blog = database.find(database => database.id === id)
  return blog
}

create = (title, content) => {
  console.log("models working")
  let result
  if (!title || !content) {
    result = {
      status: 404,
      message: "Fill in all boxes"
    }
    return result
  }
  let newPost = {
    id: uuid(),
    title,
    content
  }
  database.push(newPost)
  return newPost
}

module.exports = {
  getAll,
  getById,
  create
}
