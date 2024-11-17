// with normal way  approach
var n = 5 
var f = 1 

for(var i = n ; i>=1; i--)
{
    f = f * i
    
}

console.log(f)

// with function approach
function facto(n)
{
    var f = 1
    for(var i = n; i>=1; i--)
    {
        f = f * i
    }

    return f
}

 var res = facto(5)
 console.log(res)


 // with callback pattern 

 function factorial(n,cb)
 {
    var f = 1
    for(var i = n; i>=1; i--)
    {
        f = f * i
    }

    return cb(f)
     
 }

 factorial(6, (fa)=>{console.log(fa)})

 // with callback pattern with error handling 

//  function findFactorial(n, cb)
//  {
//     var f = 1

//         if(isNaN(n) || n < 0)
//         {
           
//             return cb(null,`${n} is invalid input`)
//         }
//         else 
//         {
               
//             for(var i = n ; i>=1; i--)
//              {
//                   f = f * i
//              }
//              return cb(f, null)
//         }
      
//  }

//  findFactorial(-5, (res, err)=>{
  
//         if(err){
//             console.log(err)
//         }
//         if(res) 
//         {
//             console.log(res)
//         }
//  })


 // by using call back patterns we can 
 // [error handling] 
 // [memory optimation]
 // [error handling] will be easy

 // functions ni use cheste [memory optimation] better untadi endhuku ante 
 // function calls ani stack lo store aithadi execution time lo 
 // particular function call aina tarvatha clear aithadi memory nunchi 
 // ade variables use cheste vatiki memory allocate aithadi that's the reason why we use functions 
 // 


 // another way of approach kooda undi manaki by using promise 

 function findFactorial(n)
 {
    var f = 1

        if(isNaN(n) || n < 0)
        {
           
            return Promise.reject(`${n} is invalid input`)  // ikkada promise ni return chestuna promise.reject chestuna kabatii direct ga catch lo ki velthadi 
        }
        else 
        {
               
            for(var i = n ; i>=1; i--)
             {
                  f = f * i
             }
             return Promise.resolve(f)  // ikkada promise ni return chestuna promise.resolve chestuna kabatii direct ga then lo ki velthadi
        }
      
 }

 findFactorial('mutyam').then((res)=>{

    console.log(res)

 }).catch((err)=>{

    console.log(err)

 })

 console.log('idi munde print aithadi')

 //Note : oka function promise ni return cheste aa function asynchronous ga maruthadi 
 // then and catch result kosam wait chestai dantlo unna anonymous function dwara print aithadi 
 // promise anedi oka object promise oka function nunchi return aithe aa function asynchronous 
 // promise ni manam asynchronous or synchronous ani chepaniki ledu kani promise object ni return chese functions ni mmatram asynchronous functions antaru 



 // Another pattern : 

 async function factoria(n)
 {
        var f = 1

        if(isNaN(n) || n < 0)
        {
           
            // throw new Error('invalid input')
            return Promise.reject(`${n} is invalid input`)
        }
        else 
        {
               
            for(var i = n ; i>=1; i--)
             {
                  f = f * i
             }
             return f
        }
 }

 factoria(-5)
 .then((res)=>{
     console.log(res)
 }).catch((err)=>{

    console.log(err)
 })


 // Prime Numbers from 1 to 100 

 // Normal way  : 

 for(var i = 1; i<=100; i++)
 {
    var count = 0
     for(var j = 1; j <= 100; j++)
     {
            if(i % j === 0)
            {
                count = count + 1
            }
     }
     if(count==2)
     {
        console.log(i)
     }

 }

 console.log('callback pattern')
 //Call back pattern 

 function findPrimeNumber(n,m,cb)
 {
    if(isNaN(n) || isNaN(m) || n<0 || m < 0)
    {
        cb(null, `${n||m} is Invalid intput`)
    }
    else 
    {
        for(var i = n; i<=m; i++)
            {
               var count = 0
                for(var j = 1; j <= 100; j++)
                {
                       if(i % j === 0)
                       {
                           count = count + 1
                       }
                }
                if(count==2)
                {
                   cb(i, null)
                }
           
            }
    }
    
 }

 findPrimeNumber(1,10,(res, err)=>{
      if(res)
      {
        console.log(res)
      }
      else 
      {
        console.log(err)
      }
 })

  //Promise  

  console.log('promise way of approaching')

  function findPrimes(n,m)
  {   var result = []
     if(isNaN(n) || isNaN(m) || n<0 || m < 0)
     {
         return Promise.reject(`${n||m} is Invalid intput`)
     }
     else 
     {
         for(var i = n; i<=m; i++)
             {
                var count = 0
                 for(var j = 1; j <= m; j++)
                 {
                        if(i % j === 0)
                        {
                            count = count + 1
                        }
                 }
                 if(count==2)
                 {
                    result.push(i)
                    
                 }
            
             }
     }

     return Promise.resolve(result)
     
  }
 
  findPrimes(1,10).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
