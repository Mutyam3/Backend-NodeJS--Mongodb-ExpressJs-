var express = require('express')
var router = express.Router()
var Employee = require('../model/employee.model')

router.get('/', function(req, res){

    Employee.find().
    then(data=>res.json(data)).
    catch(err=>console.log(err))

})

router.post('/', function(req, res){

    console.log(req.body)
    var nemp = new Employee(req.body)
    nemp.save();
    res.send('saved')
})

module.exports = router