const jwt = require("jsonwebtoken")
const userModel = require("../models/user")
require("dotenv").config()
const key = process.env.JWT_KEY

exports.login =(req, res) => {
    const { email, password } = req.body
    userModel.getUser(email,password, (error,data)=>{
        if (error) return res.status(500).send({error})

        //login success
        if (data.length) {
            const dataUser = {
                email,
                type: data[0].typename,
                statusLogin : true
                }
            const token = jwt.sign(dataUser, key, { expiresIn: '1h' })
    
            return response(res, 200, "Login Success!", [{ token }])
            }
        return response(res, 401, "User does not exist!!", [])
    })
    
}

exports.register=(req, res)=>{
    const { email, passwordConfirm, password, name } = req.body
    userModel.CheckEmail(email, (error,data)=>{
        if (error) return res.status(500).send({error})
        if (!data.length) {
            if(password === passwordConfirm){
                userModel.RegistUser(email,password,name, (error,data)=>{
                    if (error) return res.status(500).send({error})
                }) 
                return response(res, 200, "Register Success!!", [])
            }
            return response(res, 400, "Password not match", [])
        }
        return response(res, 400, "User has already registered!", [])
    })

    
}

const response = (res, code, message, data) => {
    res.send({
        code,
        message,
        data
    })
}