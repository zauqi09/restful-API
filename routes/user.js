const express = require("express")
const router = express.Router()
const userController = require("../controller/user")

const jwtAuth = require("../middleware/jwtAuth")

// profile data
// router.get("/:email", jwtAuth, userController.getProfile)

// private data
router.get("/", jwtAuth, userController.getAll)

// edit data
router.put("/edit/:email", jwtAuth, userController.EditData)

//delete data
router.delete("/delete/:email", jwtAuth, userController.deleteData)


module.exports = router