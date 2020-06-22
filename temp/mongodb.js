const mongoose = require('mongoose')

// create and/or connect to db
mongoose.connect('mongodb://localhost/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('MongoDB(mydb) has started...')
    })
    .catch(e=>{
        console.log(e)
    })

// create schema and model
const userSchema = mongoose.Schema({
  name: String,
  age: Number
})
const User = mongoose.model('User', userSchema)
