const http = require('http')


const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('home page')
    }
    else if (req.url==='/about') {
        //BLOCKING CODE
           for(let j=0;j<200;j++){
            for (let index = 0; index < 200; index++) {
            console.log(`${index} , ${j}`);
           }
        }
        res.end('About page')
    }
    else{
        res.end('Error page')
    }
})

server.listen(5000,()=>{
    console.log('Server is listening 5000!!!');
})