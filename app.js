const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const fs = require("fs")
const port = process.env.PORT || 3000
const cors = require("cors")
const uuid = require("uuid/v4")

app.disable("x-powered-by")

// if (process.env.NODE_ENV !== "test") app.use(morgan("dev"))
// app.use(bodyParser.json())
// app.use(cors())

// const blogRoutes = require("./src/routes/main.js")

// app.use("/blog", blogRoutes)

// app.use((err, req, res, next) => {
//   res.status(err.status).json(err)
// })

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Running on ${port}!`)
  })
}
module.exports = app
