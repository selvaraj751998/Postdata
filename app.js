const express = require('express')
const routes = require('./Controller/StudentController');
const bodyParser = require('body-parser')


const app = express();

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(routes)
app.listen(3000);