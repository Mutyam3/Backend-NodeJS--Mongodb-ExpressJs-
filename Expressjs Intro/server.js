var express = require('express')
var app = express()
// var reviews = require('./reviews')
var fs = require('fs')
var cors = require('cors')

app.use(cors()) // dini valana vere server nunchi request lani accept chesukovochu + only mana server nunchi vache request ne accept chesukunela chesukovchu by configure using header origin..

var bodyParser = require('body-parser')
var reviewRouter = require('./routes/review.routes')

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended:false})) // middlewares ni use chesyaniki manam import chesukunaka app.use ane medthod ni call chesi dantlo mana bodyparser ane middleware ni ivvali 
app.use(express.static(__dirname+'/Images'))  // by this we can make use of more than one static folders so anni oka folder lo kakunda ila use chesukovochu 
app.use(express.static(__dirname+ '/Public'))  // ila configure chestene work aithadi ela ante manaki request ragane ee madhyalo dhoore middleware uu check chestadi ichina request uh public folder lo unda leda ani 
                                           // unte akkadinunchi [public folder nunchi] pampistadi 
// ila static folders ni configure chestam 
app.use('/reviews', reviewRouter) // request /reviews ragane reviewRouter loki velthadi akkada / lo unna code execute aithadi 

// routes antam vettini ila raste ela ante app.get('/', function(){}) ==> ante / isthe aa function execute aithadi
// aa call back function ki req and res object lu express js create chesi isthai [express req, res modify chesi isthadi ante req ragane marchi manaki req isthadi ]
// req pampisthe req lo ki velthadi ade res ni ivvali ante res lo untai 
// ee expressjs vala mana if else lu rayakunda respective path ni req lo tesukoni daniki respective call back function trigger ayy response isthundi
// [particular path eh router ki match aithado choosi aa function ni trigger aithadi ]

// app.get('/', (req, res)=>{

//        res.sendFile(__dirname + '/Public/home.html')
// })  idi lekunda public lo index file ni pedithe direct ga / req vaste default ga pick chestadi

// app.get('/Images01.png', (req, res)=>{

// res.sendFile(__dirname + '/views/Images01.png')
// })

// app.get('/Images03.jpg', (req,res)=>{

//        res.sendFile(__dirname + '/views/Images03.jpg')
// })  // ila prathi image ki request lu isthe jeevitham motham ide rayali ee gola lekunda manaki express em isthadi ante default ga public folder 
    // ee public folder lo static folders ani manam ee public folder lo pettukovochu happy ga emaithe public folder lo unnayo vatini manam direct ga access chesukovochu 




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


