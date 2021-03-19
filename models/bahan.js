const conn = require("../config/database")

const getAllBahan = (cb=()=>{}) =>{
    try {
        conn.query("select * from bahan",
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

const getBahanByName = (bahan=null, cb=()=>{}) =>{
    try {
        conn.query("select * from bahan b where b.bahan=?",
            [bahan],
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

const getBahanById = (id=null, cb=()=>{}) =>{
    try {
        conn.query("select * from bahan b where b.id_bahan=?",
            [id],
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

const tambahBahan = (bahan=null,harga=null,ukuran=null,satuan=null, cb=()=>{}) =>{
    try {
        //insert
        conn.query("insert into bahan values (?, ?, ?)",
            [null,bahan,harga,ukuran, satuan],
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

const editBahan = (id=null,bahan=null,harga=null,ukuran=null,satuan=null, cb=()=>{}) =>{
    try {
        conn.query("update bahan set bahan=?, harga=?, ukuran=?, satuan=? where id=?",
            [bahan, harga, ukuran, satuan, id],
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

const deleteBahan = (id=null, cb=()=>{}) =>{
    try {
        conn.query("delete from bahan where id=?",
            [id],
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


module.exports = { getAllBahan,getBahanById,getBahanByName,tambahBahan,editBahan,deleteBahan}