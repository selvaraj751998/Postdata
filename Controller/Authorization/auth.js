const express = require('express')


const basicAuth = (req,res,next)=>{
   const authHeaders = req.headers['authorization']
   const base64Credentials = authHeaders.split(' ')[1]
   const credentials = Buffer.from(base64Credentials,'base64').toString('utf-8');
   const[username,password]=credentials.split(':')
    if(username === "admin" && password == "admin12345")
    {
        next();
    }else{
            res.status(400).send("Unauthorised")
    }
}

module.exports = basicAuth