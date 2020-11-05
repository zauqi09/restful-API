const jwt = require("jsonwebtoken")
const userModel = require("../models/user")
require("dotenv").config()
const key = process.env.JWT_KEY

//controller for route "/"
exports.getAll = (dataLogin, req, res, next) => {
    userModel.getAllUser((error,data)=>{
        if (error) return res.status(500).send({error})
        if (dataLogin.statusLogin){
            return response(res, 200, "Success", [{data}])
        }else {
            return response(res, 400, "Unauthorized!!", [])
        }
    })
    
}


exports.EditData = (dataLogin, req, res, next) => {
    const email = req.params.email
    const editedData = req.body
    console.log(editedData)
    if (dataLogin.type === 'admin') {
        userModel.UpdateUser(email,editedData.name, (error,data)=>{
            if (error) return res.status(500).send({error})
            return response(res, 200, "Edit Success", [])
        })
    } 
    else if (dataLogin.type === 'user') {
        if (dataLogin.email===email) {
            userModel.UpdateUser(editedData.email,editedData.name, (error,data)=>{
                if (error) return res.status(500).send({error})
    
                return response(res, 200, "Edit Success", [])
            })
        } else {
            return response(res, 400, "Unauthorized!!", [])
        }
    } else{
        return response(res, 400, "Unauthorized!!", [])
    }
    
}

exports.deleteData = (dataLogin, req, res, next) => {
    const email = req.params.email
    if (dataLogin.type === 'admin') {
        userModel.DeleteUser(email, (error,data)=>{
            if (error) return res.status(500).send({error})

            return response(res, 200, "Delete Success", [])
        })
    } else {
        return response(res, 400, "Unauthorized!!", [])
    }
    
}

const response = (res, code, message, data) => {
    res.send({
        code,
        message,
        data
    })
}