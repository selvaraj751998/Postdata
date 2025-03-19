const apikeyAuth = (req,res,next)=>{
    const validKeys = ['123456','abcefg','yourapikeys']

    const apikey = req.headers['x-api-key']
    if(!apikey){
        res.status(400).send("Bad Request")
    }
    if(validKeys.includes(apikey)){
        next()
    }else{
        res.status(401).send("Unauthorized")
    }
}

module.exports = apikeyAuth