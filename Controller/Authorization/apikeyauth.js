const responseHandler = require('./ResponseHandler/responseHandler');
const apikeyAuth = (req,res,next)=>{
    const validKeys = ['123456','abcefg','yourapikeys']

    const apikey = req.headers['x-api-key']
    if(!apikey){
       // res.status(400).send("Bad Request")

        res.send(responseHandler.Response(res,null,400))
    }
    if(validKeys.includes(apikey)){
        next()
    }else{
        res.send(responseHandler.Response(res,null,401))
    }
}

module.exports = apikeyAuth