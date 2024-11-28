var express = require('express')
var app = express() 
var bodyParser = require('body-parser')
var fs = require('fs')
const cookieParser = require('cookie-parser')

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({extended:false})) // express5 install chesukunte extended:false rayanavasaram ledu default ga tesukuntadi
app.use(cookieParser())
app.set('view engine', 'pug')

var users =  JSON.parse(fs.readFileSync('users.txt').toString())


app.post('/login', (req, res)=>{

    var user = users.find(usr=>usr.username === req.body.username && usr.password === req.body.password)
    if(user)
     {
         res.cookie('username', req.body.username)
         res.cookie('password', req.body.password)
         res.render('userHome', {details:user})
     }
    else 
    {
          res.redirect('/login.html')
    }
 })


app.use((req, res)=>{

    if(req.cookies.username)
    {
        var user = users.find(usr=>usr.username === req.cookies.username && usr.password === req.cookies.password)
        if(user)
         {
             res.cookie('username', req.body.username)
             res.cookie('password', req.body.password)
             res.render('userHome', {details:user})
         }
        else 
        {
              res.redirect('/login.html')
        }
        
    }
    else 
    {
           res.redirect('/')
    }

})
app.get('/', (req, res)=>{

    res.sendFile('/login.html')

})

app.get('/login', (req, res)=>{
    res.redirect('/login.html')
})



app.get('/logout', (req, res)=>{
    res.clearCookie('username')
    res.clearCookie('password')
    res.redirect('/login.html')
})


app.listen(4500)
