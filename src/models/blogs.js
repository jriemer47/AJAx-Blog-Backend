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
      status: 400,
      message: "Fill in all boxes"
    }
    return result
  }
  let newPost = {
    id: uuid(),
    title,
    content
  }
  console.log(database)
  database.push(newPost)
  return newPost
}

deletePost = id => {
  // console.log("models working")
  let post = database.find(post => post.id === id)
  if (!post) {
    result = {
      status: 404,
      message: `could not find blog with id of ${id}`
    }
    return result
  }
  database.forEach((post, index) => {
    if (post.id === id) {
      database.splice(index, 1)
    }
  })
  return database
}

update = (id, body) => {
  console.log("model working")
  const post = database.find(post => post.id === id)

  let index = database.indexOf(post)
  let error = []
  let { content } = body

  let response
  if (!content || !body.title) {
    error.push("please add content")
    response = {
      error
    }
  } else {
    const newPost = {
      id: uuid(),
      title: body.title,
      content: body.content
    }
    database[index] = newPost
    response = newPost
  }
  return response
}

module.exports = {
  getAll,
  getById,
  create,
  deletePost,
  update
}
