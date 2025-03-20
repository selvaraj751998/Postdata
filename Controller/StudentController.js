const express = require('express');
const stud_response = require('./response');
const apikeyAuth = require('./Authorization/apikeyauth');
const responseHandler = require('./Authorization/ResponseHandler/responseHandler');
const router = express.Router()

router.get('/',(req,res)=>{
        console.log("First Middleware")
        responseHandler.Response(res,stud_response,200);
})


router.get('/getalldetails',apikeyAuth,(req,res)=>{
    responseHandler.Response(res,stud_response,200)
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
    var checkResult = stud_response.find(x => x.name.toLowerCase()==name.toLowerCase())
    if(checkResult){
    stud_response.push(new_object)
    console.log(name)
    const result = stud_response.length
    responseHandler.Response(res,result,200)
}else{
    responseHandler.Response(res,null,400)
}
})

module.exports = router;