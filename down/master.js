const child_process = require('child_process');
const http = require('http');
const cpuLen = require('os').cpus().length;
const server = http.createServer();
server.listen(3000)

function createProcess() {
    let worker = child_process.fork('./worker.js');
    console.log(worker.pid);
    worker.send('server', server);
    worker.on('exit', () => {
        createProcess()
    })

    worker.on('message', (error) => {
        console.log('====error', error)
    })

}



for (let i = 0; i < cpuLen; i++) {
    createProcess()
}