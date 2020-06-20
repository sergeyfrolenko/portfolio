const mongoose = require('mongoose')

// connect to db
mongoose.connect('mongodb://localhost/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('Connect to MongoDB(mydb) has started...')
    })
    .catch(e=>{
        console.log(e)
    })
