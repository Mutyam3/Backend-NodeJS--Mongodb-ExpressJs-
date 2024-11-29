var express = require('express')
var app = express()

var expressSession = require('express-session')

app.use(expressSession({
    secret: 'mass raa ',
    cookie: {maxAge: 60000}
}))


app.get('/', (req, res)=>{
    res.send('hi session')
})






app.listen(4700, ()=>{console.log('server running on 4700')})
