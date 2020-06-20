const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
   res.render('dynamic',{
     name: 'Olya',
     url: 'webref'
   });
});
router.get('/first', (req, res)=>{
   res.render('first');
});
router.get('/skills', (req, res)=>{
   res.render('skills', {
     title: 'My Skills',
     logo: 'Knowledge light your future'
   });
});
router.get('/form', (req, res)=>{
  res.render('form');
});
router.post('/form', (req, res)=>{
  console.log(req.body);
  res.send('recieved your request!');
});
router.get('/user', (req,res)=>{
  res.render('user');
})

module.exports = router;
