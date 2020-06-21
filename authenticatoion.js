const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  res.end('hello')
})

app.listen(3000, ()=>{
  console.log('Server starts...')
})
