const mongoose = require('mongoose')

// connect to mongo data bases, if there not exist current db(minin) it'll be create
mongoose.connect('mongodb://localhost/minin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('MongoDB has started...')
    })
    .catch(e=>{
        console.log(e)
    })

// get model of document, like a table in sql. Model description points in adding chunks
require('./person.model')
const Person = mongoose.model('persons')

// create new chunk
// const person = new Person({
//     name: 'WebForMyself',
//     age: 24,
//     phones: [4697171]
// })
// const data = [{name: 'Person 1', age: 20}, {name: 'Person 2', age: 23}, {name: 'Person 3', age: 26}];
// data.forEach(el => {
//     new Person(el).save();
// });

// save chunk to db
// person.save()
//   .then(user => {
//     console.log(user)
//   })
//   .catch(e => console.log(e))

// quire
// Person.find()
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch(e=>{
//         console.log(e)
//     })
// Person
//   .find({name: {'$in': ['Person 1', 'Person 2']}})
//   .limit(2)
//   .sort('-age')
//   .then(persons => {
//     console.log(JSON.stringify(persons, null, 2))
// })

// delete duplicates
// Person.find()
//     .then(data=>{
//         data.forEach(el=>{
//             Person.find({name: 'el.name'})
//                 .then(data2=>{
//                     
//                 })
//                 .catch(e=>{
//                     console.log(e)
//                 })
//         })
//     })
//     .catch(e=>{
//         console.log(e)
//     })
// Person.find()
//   .sort('-age')
//   .limit(1)
//   .deleteOne()
// //   .remove()
//   .then((arr)=>{
//     console.log(arr)
//   })
