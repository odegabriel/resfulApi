const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const passport = require("passport");
const router = require('./router/router.js')
const cookies = require('cookie-parser')
const expressSession = require('express-session')
const local = require('passport-local')

//const User = require('./models/userModel')

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
// app.use(passport.initialize)
// app.use(passport.session)
// app.use(local())

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });
  
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function (err, user) {
//       done(err, user);
//     });
//   });
  //app.post('/login', 
  //passport.authenticate('local', { failureRedirect: '/login' }),
  //function(req, res) {
    //  let {userName,password} = req.body
      //console.log(userName)
    //res.redirect('/');
  //});
 app.use(router);

// app.post('/login',(req)=>console.log(req.body.userName))

app.listen(3002, ()=> console.log("server is running"))




