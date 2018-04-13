const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const fs = require("fs")
const port = process.env.PORT || 3000
const cors = require("cors")
const uuid = require("uuid/v4")
const db = require("./db/blogs.json")

app.disable("x-powered-by")

if (process.env.NODE_ENV !== "test") app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cors())

// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   // Serve frontend files from the frontend repo
//   app.use(express.static("../AJAX-Blog-Frontend")) // this allows you to use local host and deploying will not conflict with production mode
// }

const blogRoutes = require("./src/routes/blogs.js")
app.use("/blogs", blogRoutes)

app.use((err, req, res, next) => {
  const status = err.status
  res.status(status).json({ error: err })
})

app.listen(port, () => {
  console.log(`Running on ${port}!`)
})

module.exports = app
