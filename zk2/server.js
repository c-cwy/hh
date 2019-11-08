const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ code: 1, list: ['1', '2'] }))
    } else if (req.url === '/txt') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('text121')
    } else if (req.url === '/jpg') {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
        let imgUrl = fs.readFileSync('./1.jpg');

        res.end(imgUrl)
    } else {
        res.end('ok');
    }
}).listen(8080, () => {
    console.log('服务启动成功');
})