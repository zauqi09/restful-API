const express = require("express")
const router = express.Router()
const produkController = require("../controller/produk")

// profile data
// router.get("/:email", jwtAuth, userController.getProfile)

// private data
router.get("/", produkController.getAll)

router.post("/add", produkController.getAll)

// edit data
router.put("/edit/:id", produkController.EditData)

//delete data
router.delete("/delete/:id", produkController.deleteData)


module.exports = router