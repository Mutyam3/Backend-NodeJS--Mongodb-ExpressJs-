var express = require('express')

var app = express()

// router antam vettini ila raste ela ante app.get('/', function(){}) ==> ante / isthe aa function execute aithadi
// aa call back function ki req and res object lu express js create chesi isthai [express req, res modify chesi isthadi ante req ragane marchi manaki req isthadi ]
// req pampisthe req lo ki velthadi ade res ni ivvali ante res lo untai 
// ee expressjs vala mana if else lu rayakunda respective path ni req lo tesukoni daniki respective call back function trigger ayy response isthundi
// [particular path eh router ki match aithado choosi aa function ni trigger aithadi ]

app.get('/', function(req, res){

      res.send('hello world')
})


app.get('/students', function(req, res){

        res.send('students mama')
})

app.get('/students/:sname', function(req, res){ // paramterized routing/dynamic routing

       res.send(req.params.sname)
})

app.get('/employees', function(req, res){

       res.send('employees mama')

})

app.get('/add/:fn/:ln', function(req, res){

    var num1 = + req.params.fn 
    var num2 = + req.params.ln
    var addNumbers = num1 + num2 
    res.send(addNumbers.toString())

})


app.get('/studentshome' , function(req, res)
{
       res.sendFile(__dirname+'/students.html') // ikkada __dirname enduku ante current directory lo unnam ga andhuke
})





app.listen(4500)

// ikkada em jaruguthundi ante oka server create aindi oka application create aindi 
// aa application  server lo run aithundi 4500 port meda run aithundi 
//package.json lo manam scripts : {
//'start' : 'nodemonn server.js'
//} ila package.json lo pedithe emaithadi ante manam command prompt lo npm start ante 
// start dantlo unna command execute aithadi i.e nodemon server.js ane command execute aithadi 
// we can use easily npm start to run our backend server


