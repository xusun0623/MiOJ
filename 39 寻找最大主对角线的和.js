let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var tmp = []

rl.on('line', (line) => {
    while (line) {
        tmp.push(line.split(' ').map(x => {
            return parseInt(x)
        }))
        return
    }
})

rl.on('close', () => {
    getMax(tmp)
});

var getMax = (tmp) => {
    var y = tmp.length
    var x = tmp[0].length
    var max = 0
    for (var i = 0; i < x - 1; i++) {
        for (var j = 0; j < y - 1; j++) {
            if (tmp[j][i] + tmp[j + 1][i + 1] > max) {
                max = tmp[j][i] + tmp[j + 1][i + 1]
            }
        }
    }
    console.log(max)
}