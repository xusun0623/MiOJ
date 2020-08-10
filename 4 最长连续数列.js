// 描述
// 输入一个乱序的连续数列，输出其中最长连续数列长度，要求算法复杂度为 O(n) 。

// 输入
// 54,55,300,12,56

// 输出
// 3

// see: https://nodejs.org/api/readline.html

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// when a line is read
rl.on('line', (line) => {
    // process the input here
    const arr = bubble(line.split(","))
        // console.log(arr)
    var count = 1
    var max = 0
    if (arr.length == 1) {
        console.log(1)
        return
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] - 1 == arr[i]) {
            count++
            count >= max ? (max = count) : ''
        } else {
            count = 1
        }
    }
    console.log(max)


})

// EOF
rl.on('close', () => {

});

var bubble = function(arr) {
    if (arr.length == 1) {
        return [parseInt(arr[0])]
    }
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (parseInt(arr[j]) > parseInt(arr[j + 1])) {
                const tmp = parseInt(arr[j])
                arr[j] = parseInt(arr[j + 1])
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}