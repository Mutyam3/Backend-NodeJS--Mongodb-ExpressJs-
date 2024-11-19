var http = require('http')
//console.log(http) //methods vastai | create server method |status codes kooda unnai
var fs = require('fs')
var url = require('url')
var path = require('path')
//   console.log(url)

var students = require('./students')

http.createServer((req, res)=>{
    console.log('request received')
    // res.end('hello namaste bossuu')
    // console.log(req) // ikkada manaki req lo url method untadi manam url lo http request path endpoints isthe req.url lo ki vastadi routes antam veetini  
    // if(req.url == '/mutyam'){
    //     res.end('Namaste Mutyam Anna')
    // }
    // if(req.url == '/Bhargav')
    // {
    //     res.end('babu bhargav neeku baaga balisindi')
    // }

    // if(req.url == '/mass')
    // {
    //     res.end('<h1>Bhargav</h1>') // mass ane request vaste manam h1 element ni response ga isthunam 
    // }

    // // manam element ne kadhu oka html page ni kooda response ni pampochu 

    // if(req.url == '/boom')
    // {
    //     var data = fs.readFileSync('myhtmlpage.html').toString()
    //     res.end(data)
    // }

    // ippudu nenu request dwara oka file name ni pampistha aa file name ni tesukoni response ivvali 

    if(req.url=='/favicon.ico')
    {
        res.end('namaste bossuu konchem aagu')
    }
    else 
    {
         // manam pampe request lo file name ga pampochu ledha route|path dwara aina pampochu   so  
        // ikkada problem endi ante yedi files yedi route anedi telusukunte manam ki correct ga execute aithadi.
        // dani kosam manam path lo extname ane method ki mana url isthe manaki adi file name extension isthadi 
        // daniki anukoolanga rasukovali if() lo nenu route|path [extension em radu]ni tesukune laga ichi else lo fileextension [extension tho unnai vastai] tho unnai isthe saripothadi 
        // endhuku else lo tesukuna ante file extension eh daina kavochu so eh file extension aina kooda else loki veletatu rasukunte correct ga exceute aithadi 
           console.log(path.extname(req.url))

           if(path.extname(req.url)=='')
           {
               var tb = ''
               for(var i = 0; i<=students.length-1; i++){
                     tb = tb + ` <tr>
                                   <td>${students[i].firstname}</td>
                                   <td>${students[i].lastname}</td>
                                   <td>${students[i].age}</td>
                                   <td>${students[i].gender}</td>
                                 <tr>
                               `
               }
               var table = `<table border='2'>${tb}</table>`
               res.end(table.toString())
           }
           else 
           {
                  fs.readFile(path.basename(req.url), (err, data)=>{

                       if(err)
                       {
                            // res.end(req.url + 'file not avaiable')
                           res.setHeader('Content-Type', 'text/html')
                           res.end("<img src = 'https://www.hubspot.com/hs-fs/hubfs/HTTP-500-Internal-Server-Error-3.jpg?width=595&height=400&name=HTTP-500-Internal-Server-Error-3.jpg'/>") 
                       }
                       else 
                       {
                            res.end(data.toString())
                       }
                 })
           }
        
    }

}).listen(4500) // create chesina server oka port meda run avvali epudaina 




