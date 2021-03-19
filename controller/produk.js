const produkModel = require("../models/produk")
require("dotenv").config()

//controller for route "/"
exports.getAll = (req, res, next) => {
    produkModel.getAllProduk((data)=>{
        return response(res, 200, "Success", [{data}])
    })
    
}

exports.addData = (req, res, next) => {
    const addedData = req.body
    console.log(addedData)
    produkModel.tambahProduk(addedData.nama_produk, addedData.harga_jual, addedData.harga_modal, addedData.harga_diskon, (error,data)=>{
        if (error) return res.status(500).send({error})
        return response(res, 200, "Add Success", [{addedData}])
    })
}


exports.EditData = (req, res, next) => {
    const id = req.params.id
    const editedData = req.body
    console.log(editedData)
    produkModel.editProduk(id,editedData.nama_produk, editedData.harga_jual, editedData.harga_modal, editedData.harga_diskon, (error,data)=>{
        if (error) return res.status(500).send({error})
        return response(res, 200, "Edit Success", [])
    })
}

exports.deleteData = (req, res, next) => {
    const id = req.params.id
    produkModel.deleteProduk(id, (error,data)=>{
        if (error) return res.status(500).send({error})
        return response(res, 200, "Delete Success", [])
    })    
}

const response = (res, code, message, data) => {
    res.send({
        code,
        message,
        data
    })
}