const app = require('express')();

const things = require('./things');
app.use('/things', things);

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res)=>{
   res.render('dynamic',{
     name: 'Olya',
     url: 'webref'
   });
});
app.get('/first', (req, res)=>{
   res.render('first');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

