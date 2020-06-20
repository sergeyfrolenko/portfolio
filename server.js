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
const User = mongoose.model('User')

// USE section
const things = require('./things');
app.use('/things', things);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());

// Routing
app.get('/', (req, res)=>{
   res.render('dynamic',{
     name: 'Olya',
     url: 'webref'
   });
});
app.get('/first', (req, res)=>{
   res.render('first');
});
app.get('/skills', (req, res)=>{
   res.render('skills', {
     title: 'My Skills',
     logo: 'Knowledge light your future'
   });
});
app.get('/form', (req, res)=>{
  res.render('form');
});
app.post('/form', (req, res)=>{
  console.log(req.body);
  res.send('recieved your request!');
});
app.get('/user', (req,res)=>{
  res.render('user');
})
app.post('/user', function(req, res){
   const userInfo = req.body;
   if(!userInfo.name || !userInfo.age) {
      res.render('show_message', {
         message: "Sorry, you provided worng info",
         type: "error"
      });
   } else {
      const newUser = new User({
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
           console.log(userInfo)
            res.render('show_message', {
              message: "New person added",
              type: "success", 
              user: userInfo
            });
         }
      });
   }
});

// Listening
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

