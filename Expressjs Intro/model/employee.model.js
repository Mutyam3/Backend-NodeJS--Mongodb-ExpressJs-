const mongoose = require('mongoose')
var {Schema} = mongoose 
const employeeSchema = new Schema({
         firstname : {type:String},
         lastname : {type:String},
         gender : {type:String},
         qual : {type:String}
});

var Employee = mongoose.model('Employee', employeeSchema) // manam ikkada model ni create chestunam
module.exports = Employee;





