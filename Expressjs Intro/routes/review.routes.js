var express = require('express')
var router = express.Router()
var fs = require('fs')


router.get('/deleteReview/:id', function(req,res)
{
       var reviews = JSON.parse(fs.readFileSync('review.txt').toString())
       reviews.splice(req.params.id,1)
       fs.writeFileSync('review.txt',JSON.stringify(reviews))
       res.send('bossu nuvvu anukunnadi delete aindi')
})

router.post('/addReview', function(req,res){

       console.log(req.body) // body lo mana data untadi 
       var reviews = JSON.parse(fs.readFileSync('review.txt').toString())
       reviews.push(req.body) // push chesinaka manam ippudu file ni replace cheyali kotha file ni  so adhi write tho chestam 

       fs.writeFileSync('review.txt', JSON.stringify(reviews))

       // form submit cheyagane post method use cheste payload lo data vastadi  aa data ni pick cheyaniki oka middleware kavali manaki bodyParser ane middleware default ga undi import chesukoni use hcesukotame 
       res.send('mass raa form fill chesav')
})

router.get('/getReviewForm', function(req,res){

        res.sendFile(__dirname+'/addReview.html')

})

router.get('/', function(req, res){
    var reviews = JSON.parse(fs.readFileSync('review.txt').toString()) //  fs module textfile ni read chesi oka buffer lo isthadi dani manam string ga marchi Json.parse ni use chesi json format loki tesukuvastam
    res.render('home' ,{ reviews, students : ['Mutyam', 'Bhargav', 'Reddy']}) // direct ga reviews rasa idi es6 advanced object literals dwara reviews ane key tho reviews create ayy values assign aithai 
})

module.exports = router