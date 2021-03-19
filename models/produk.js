const conn = require("../config/database")

const getAllProduk = (cb=()=>{}) =>{
    try {
        conn.query("select * from produk",
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

const getProdukByName = (produk=null, cb=()=>{}) =>{
    try {
        conn.query("select * from produk p where p.nama_produk=?",
            [produk],
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

const getProdukById = (id=null, cb=()=>{}) =>{
    try {
        conn.query("select * from produk p where p.id_produk=?",
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

const tambahProduk = (nama_produk=null,harga_jual=null,harga_modal=null,harga_diskon=null, cb=()=>{}) =>{
    try {
        //insert
        conn.query("insert into produk values (?, ?, ?, ?, ?)",
            [null,nama_produk, harga_jual, harga_modal, harga_diskon],
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

const editProduk = (id=null,nama_produk=null,harga_jual=null,harga_modal=null,harga_diskon=null, cb=()=>{}) =>{
    try {
        conn.query("update produk set nama_produk=?, harga_jual=?, harga_modal=?, harga_diskon=? where id_produk=?",
            [nama_produk, harga_jual, harga_modal,harga_diskon, id],
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

const deleteProduk = (id=null, cb=()=>{}) =>{
    try {
        conn.query("delete from produk where id_produk=?",
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


module.exports = { getAllProduk, getProdukById, getProdukByName, tambahProduk, editProduk, deleteProduk}