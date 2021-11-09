const http = require('http')
const server = http.createServer((request, Response) => {
    let url = request.url
    Response.write(url)
    Response.end()
})

server.listen(8090, 'localhost', () => {
    console.log('localhost:8090')
})

