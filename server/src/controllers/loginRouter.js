const express = require('express')
const connection = require('../config/connectDB')
const router = express.Router()

router.post('/login', (req,res)=>{
    const {username, password} = req.body;
    let query = `select username, password from users`;
    connection.query(query, (err, result)=>{
        if(err) return res.status(400).json({success: false, message: 'connection fail'});
        
        if(username == ''){
            return res.status(200).json({success: true, message: 'account cannot be empty'})
        } else if(password == ''){
            return res.status(200).json({success: true, message: 'password cannot be empty'})
        }else if(username != result[0].username){
            return res.status(200).json({success: true, message: 'account does not exist'})
        }else if(password != result[0].password){
            return res.status(200).json({success: true, message: 'password does not exist'})
        }else if(username==result[0].username && password == result[0].password){
            return res.status(200).json({success: true, message: 'login success'})
        }
    })
})


module.exports = router;