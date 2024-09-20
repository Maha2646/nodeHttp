const http=require('http')

const server =http.createServer((request,respone)=>{
    respone.writeHead(200,{'content-text':'text/html'})
    respone.write("<center>sangetha</center>")

    respone.end()
})

server.listen(9000,()=>{
    console.log("server is running at 'http://127.0.0.1:5500/JS%20DOM%20Manipulations/todo_list.html'")
})