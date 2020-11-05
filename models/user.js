const conn = require("../config/database")

//query for getalluser
const getAllUser = (cb=()=>{}) =>{
    try {
        //find user from database
        conn.query("select u.email, u.name, t.typename from user u left join type t on u.type = t.id",
            function (error,results,fields){
                if(error) {
                    console.log("ERROR: getAllUser.if - "+error)
                    return cb("Internal Server Error!!", null)
                }
            return cb(null, results)
        })
    } catch (err) {
        console.log("ERROR: "+err)
        return cb("Internal Server Error!!", null)
    }
}

//query for login
const getUser = (email=null,password=null, cb=()=>{}) =>{
    try {
        //find user from database
        conn.query("select t.typename from user u left join type t on u.type = t.id where u.email=? and u.password=? limit 1",
            [email, password],
            function (error,results,fields){
                if(error) {
                    console.log("ERROR: getUser.if - "+error)
                    return cb("Internal Server Error!!", null)
                }
            return cb(null, results)
        })
    } catch (err) {
        console.log("ERROR: "+err)
        return cb("Internal Server Error!!", null)
    }
}

//query for checking email availability on database
const CheckEmail = (email=null, cb=()=>{}) =>{
    try {
        //find email
        conn.query("select email from user where email=?",
            [email],
            function (error,results,fields){
                if(error) {
                    console.log("ERROR: Checkmail.if - "+error)
                    return cb("Internal Server Error!!", null)
                }
            return cb(null, results)
        })
    } catch (err) {
        console.log("ERROR: "+err)
        return cb("Internal Server Error!!", null)
    }
}

//query for register
const RegistUser = (email=null,password=null,name=null, cb=()=>{}) =>{
    try {
        //insert
        conn.query("insert into user values (?, ?, ?, ?, ?, ?)",
            [null,email, name, 2, password, 'inisalt'],
            function (error,results,fields){
                if(error) {
                    console.log("ERROR: register.if - "+error)
                    return cb("Internal Server Error!!", null)
                }
            return cb(null, results)
        })
    } catch (err) {
        console.log("ERROR: "+err)
        return cb("Internal Server Error!!", null)
    }
}

//query for updateuser
const UpdateUser = (email=null,name=null, cb=()=>{}) =>{
    try {
        //uddating
        conn.query("update user set name=? where email=?",
            [name, email],
            function (error,results,fields){
                if(error) {
                    console.log("ERROR: update.if - "+error)
                    return cb("Internal Server Error!!", null)
                }
            return cb(null, results)
        })
    } catch (err) {
        console.log("ERROR: "+err)
        return cb("Internal Server Error!!", null)
    }
}

//query for deleteuser
const DeleteUser = (email=null, cb=()=>{}) =>{
    try {
        //uddating
        conn.query("delete from user where email=?",
            [email],
            function (error,results,fields){
                if(error) {
                    console.log("ERROR: delete.if - "+error)
                    return cb("Internal Server Error!!", null)
                }
            return cb(null, results)
        })
    } catch (err) {
        console.log("ERROR: "+err)
        return cb("Internal Server Error!!", null)
    }
}


module.exports = { getUser,RegistUser,CheckEmail,getAllUser,UpdateUser,DeleteUser}