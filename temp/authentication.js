const express = require('express')
const app = express()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const multer = require('multer');
const upload = multer();

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());
app.use(cookieParser())
app.use(session({ secret: 'Your secret key' }))

const Users = [{id:'a',password:'a'}]

app.get('/signup', (req,res)=>{
  res.render('signup')
})
app.post('/signup', (req,res)=>{
  if(!req.body.id || !req.body.password) {
    res.status('400')
    res.send('Invalid details!')
  } else {
    const existUser = Users.filter(user=>{
      if( user.id == req.body.id ) {
        // res.render('signup', {
        //   message: 'User alredy exists! Login or choose another user id'
        // })
        // return 1
      }
    })
    console.log('existUser')
    res.send(existUser)
    // const newUser = {
    //   id: req.body.id,
    //   password: req.body.password
    // }
    // Users.push(newUser)
    // req.session.user = newUser
    // console.log(Users)
    // res.redirect('/protected_page')
  }
})
// function checkSignIn(req,res) {
//   console.log('req')
//   if(req.session.user) {
//     next() // if session exists, procced page
//   } else {
//     const err = new Error('No logged in!')
//     console.log(req.session.user)
//     next(err) // error, trying to access unauthorized page!
//   }
// }
// app.get('/protected_page',  function (req,res) {
//   res.render('protected_page', {
//     id: req.session.user.id
//   })
// })
// app.use('/protected_page', (err,req,res,next)=>{
//   console.log(err)
//   res.redirect('/login')
// })
// app.get('/login', (req,res)=>{
//   res.render('login')
// })
// app.post('/login', (req,res)=>{
//   console.log(Users)
//   if( !req.body.id || !req.body.password ) {
//     res.render('login', {
//       message: 'Please enter both id and password'
//     })
//   } else {
//     Users.filter(user=>{
//       if( user.id == req.body.id && user.password == req.body.password ) {
//         req.session.user = user
//         res.redirect('/protected_page')
//       }
//     })
//     res.render('login', {
//       message: 'Invalid credentials!'
//     })
//   }
// })
// app.get('/logout', (req,res)=>{
//   req.session.destroy(()=>{
//     console.log('user logged out.')
//   })
//   res.redirect('/login')
// })

app.listen(3000, ()=>{
  console.log('Server starts...')
})
