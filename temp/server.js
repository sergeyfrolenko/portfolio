const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const mongoose = require('mongoose')

// SET section
app.set('view engine', 'pug');
app.set('views', './views');

// connect to db
require('./connectMydb')
// model return User
require('./user.model')
const Users = mongoose.model('Users')

// USE section
const things = require('./things');
app.use('/things', things);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());

// Routing
const routing = require('./routing');
app.use('/', routing);
app.post('/user', function(req, res){
   const userInfo = req.body;
   if(!userInfo.name || !userInfo.age) {
      res.render('show_message', {
         message: "Sorry, you provided worng info",
         type: "error"
      });
   } else {
      const newUser = new Users({
         name: userInfo.name,
         age: userInfo.age
      });
      newUser.save((err, User)=>{
         if(err) {
            res.render('show_message', {
              message: "Database error", 
              type: "error"
            });
         } else {
            Users.find()
              .then(arr=>{
                console.log(arr)
              })
              .catch(e=>{
                console.log(e)
              })
            res.render('show_message', {
              message: "New person added",
              type: "success", 
              user: userInfo,
            });
         }
      });
   }
});

// read mongodb mydb

// Listening
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

