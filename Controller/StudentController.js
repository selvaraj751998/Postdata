const express = require('express');
const stud_response = require('./response');
const basicAuth = require('./Authorization/auth')
const router = express.Router()

router.get('/',(req,res)=>{
        console.log("First Middleware")
        res.json(stud_response);
})


router.get('/getalldetails',basicAuth,(req,res)=>{
    res.json(stud_response)
})


router.get('/getstuddetails',(req,res,next) => {
    const {couponId,studName} = req.query;
    console.log(couponId,studName)
    const result = stud_response.find(x =>x.name.toLowerCase() == studName.toLowerCase())
    res.json(result)
})


router.post('/uploadstuddata',(req,res,next)=>{
    console.log(stud_response.length)
    const{name,gender,physics,maths,english} = req.body
    const new_object = {
        "name":name,
        "gender":gender,
        "physics":physics,
        "maths" :maths,
        "english" :english
    }

    stud_response.push(new_object)
    console.log(name)
    const result = stud_response.length
    res.json(stud_response)
})

module.exports = router;