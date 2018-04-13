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

module.exports = {
  getAll,
  getById
}
