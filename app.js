//import
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const produk = require("./routes/produk")
//app
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static("public"))

app.use((req, res, next) => {
    next()
})


app.use("/produk", produk) // edit, delete, detail, add, get

// error handler
app.use((req, res, next) => {
    const error = new Error("Error occured!!")
    next(error)
})
app.use((error, req, res, next) => {
    res.status(500).json({
        code: 500,
        message: error.message
    })
})

app.use(express.static("public"))
 module.exports = app