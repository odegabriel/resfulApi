const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const passport = require("passport");
const router = require('./router/router.js')
const cookies = require('cookie-parser')
const expressSession = require('express-session')
const local = require('passport-local')


mongoose.connect("mongodb://127.0.0.1/myapp",{
  useUnifiedTopology : true,
  UseNewUrlParser : true
})
.then()
.catch(e => console.log(e) )


const app = express()

app.use(cors())
app.use(cookies())
app.use(express.json())
app.use(express.urlencoded({extended : true}));

app.use(expressSession(
{
    secret:"gabriel", 
    resave: true, 
    saveUninitialized: true
}))
 app.use(router);


app.listen(3002, ()=> console.log("server is running"))




