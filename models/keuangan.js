const conn = require("../config/database")

const getAllKeuangan = (cb=()=>{}) =>{
    try {
        conn.query("select * from keuangan",
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

// const getProdukByName = (produk=null, cb=()=>{}) =>{
//     try {
//         conn.query("select * from produk p where p.nama_produk=?",
//             [produk],
//             function (error,results,fields){
//                 if(error) {
//                     console.log("ERROR: getUser.if - "+error)
//                     return cb("Internal Server Error!!", null)
//                 }
//             return cb(null, results)
//         })
//     } catch (err) {
//         console.log("ERROR: "+err)
//         return cb("Internal Server Error!!", null)
//     }
// }

// const getProdukById = (id=null, cb=()=>{}) =>{
//     try {
//         conn.query("select * from produk p where p.id_produk=?",
//             [id],
//             function (error,results,fields){
//                 if(error) {
//                     console.log("ERROR: getUser.if - "+error)
//                     return cb("Internal Server Error!!", null)
//                 }
//             return cb(null, results)
//         })
//     } catch (err) {
//         console.log("ERROR: "+err)
//         return cb("Internal Server Error!!", null)
//     }
// }

const tambahKeuangan = (perihal=null,jumlah=null, cb=()=>{}) =>{
    try {
        //insert
        conn.query("insert into keuangan values (?, ?, ?, ?)",
            [null,perihal,jumlah,null],
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

const editKeuangan = (id=null,perihal=null,jumlah=null, cb=()=>{}) =>{
    try {
        conn.query("update keuangan set perihal=?, jumlah=? where id_keuangan=?",
            [perihal,jumlah,id],
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

const deleteKeuangan = (id=null, cb=()=>{}) =>{
    try {
        conn.query("delete from keuangan where id_keuangan=?",
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


module.exports = { getAllKeuangan,tambahKeuangan,editKeuangan,deleteKeuangan}