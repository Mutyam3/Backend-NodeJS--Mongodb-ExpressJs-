var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bhargavreddymutyam:Mutyam123@cluster0.wbkoq.mongodb.net/').then(()=>{
    console.log('connected to mongodb')
}).catch(()=>{
    console.log('not connected to mongodb')
})

