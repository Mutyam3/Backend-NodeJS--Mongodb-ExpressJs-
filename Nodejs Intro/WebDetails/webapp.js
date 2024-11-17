var http = require('http')
http.createServer((req, res)=>{
    console.log('request received')
    // if(req.url == '/mutyam'){
    //     res.end('Namaste Mutyam Anna')
    // }
    // if(req.url == '/Bhargav')
    // {
    //     res.end('babu bahrgav neeku baaga balisindi')
    // }

}).listen(4500)


