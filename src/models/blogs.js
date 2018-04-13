const database = require("../../db/blogs")
const uuid = require("uuid/v4")

getAll = () => {
  console.log("models working")
  return database
}

module.exports = {
  getAll
}
