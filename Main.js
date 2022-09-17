const http =require('http')
const server =http.createServer((req,res)=>{
    if (req.url==='/') {
        res.end('Welcome to our Home page')
    }
    else if (req.url==='/about') {
        res.end("My name is kashyap")
    }
    else {res.end(`
    <h1>Opps!</h1>
    <p>We cant seem to find the page</p>
    <a href="/">Home</a>
    `)
}
})

server.listen(5000)