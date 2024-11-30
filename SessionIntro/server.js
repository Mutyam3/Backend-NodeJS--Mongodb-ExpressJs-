var express = require('express')
var app = express()

var expressSession = require('express-session')
var bodyParser = require('body-parser')
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({extended:false}))

app.use(expressSession({
    secret: 'mass raa ',
    cookie: {maxAge: 24*60*60*1000} // 6000 -> 6seconds | 60000 -> 1 minute | 10minutes -> 10*60*1000 | 1day ==> 24hr ==> 24*60*60*1000
}))

app.post('/login',(req, res)=>{

    req.session.username = req.body.username
    res.redirect('/')
})

app.use((req, res, next)=>{

    // console.log(req.session)
    // console.log(req.sessionID)
    // if(req.session.count){
    //     req.session.count++
    // }
    // else 
    // {
    //     req.session.count = 1
    // }
    // console.log(req.sessionID + " : " + req.session.count)

    if(req.session.username)
    {
        next()
    }
    else 
    {
        res.redirect('/login.html')
    }
    
})

app.get('/', (req, res)=>{
    res.send('hi sessions')
})

app.get('/abc', (req, res)=>{
    res.send('abc request raa idi')
})

app.get('/mutyam', (req, res)=>{
    res.send('mutyam request vachai')
})



app.listen(4700, ()=>{console.log('server running on 4700')})
