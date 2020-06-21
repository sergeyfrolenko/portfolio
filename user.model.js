const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema and model
const userSchema = new Schema({
  name: String,
  age: Number
})
mongoose.model('Users', userSchema)
