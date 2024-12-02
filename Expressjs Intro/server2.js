var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bhargavreddymutyam:Mutyam123@cluster0.wbkoq.mongodb.net/MutyamDB').then(()=>{
    console.log('connected to mongodb')
}).catch(()=>{
    console.log('not connected to mongodb')
})

var Employee =require('./model/employee.model');
// to get the employees details
Employee.find().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

// create a employee 

// var newEmp = new Employee({firstname : 'Mahesh', lastname:'Babu', gender:'Male', qual:'M.Tech'})
// newEmp.save(); // it will insert the object 

// Employee.findOneAndDelete({firstname:'Daniel'}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

// Employee.findByIdAndDelete('674bffd927eabf03e7893c00').then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


Employee.findByIdAndUpdate('674d590eda310c6ab34d84a0', {qual:'B.Tech'}).then((res)=>{
    console.log(res)

}).catch((err)=>{

    console.log(err)
})


