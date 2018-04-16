const express = require("express")
const router = express.Router()
const ctrl = require("../controllers/blogs.js")

router.get("/", ctrl.getAll)

router.get("/:id", ctrl.getById)

router.post("/", ctrl.create)
//
router.put("/:id", ctrl.update)
//
router.delete("/:id", ctrl.deletePost)

module.exports = router
