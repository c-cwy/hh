const { spawn } = require('child_process');

const fs = require('fs');

const path = require('path');

let filename = path.join(__dirname, process.argv[2])

const childP = createProcess()

function createProcess() {
    if (fs.existsSync(filename)) {
        let child = spawn('node', [filename]);

        child.stdout.on('data', data => {
            console.log(data);
        })

        child.stderr.on('data', data => {
            console.log(data);
        })
        return child;
    } else {
        console.log('路径不存在');
    }
}

let watcher = fs.watch(filename);

watcher.on('change', () => {
    child.kill();

    childP = createProcess()
})