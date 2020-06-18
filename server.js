const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

// USE section
const things = require('./things');
app.use('/things', things);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());

// SET section
app.set('view engine', 'pug');
app.set('views', './views');

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

// Listening
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

