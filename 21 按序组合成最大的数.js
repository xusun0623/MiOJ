let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var arrayA = []
var arrayB = []
var K = ''

rl.on('line', (line) => {
    var total = line.split(' ')
    arrayA = total[0].split(',').map(x => {
        return parseInt(x)
    })
    arrayB = total[1].split(',').map(x => {
        return parseInt(x)
    })
    K = parseInt(total[2])
    console.log(arrayA, arrayB, K)


})

rl.on('close', () => {});

var findMax = function() {

}

var isEnought = function(indexA, indexB) {
    if (arrayA.length + arrayB.length - (indexA + 1) - (indexB + 1) > K) {
        return 1
    } else {
        return 0
    }
}