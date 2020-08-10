// 描述
// 有一串可能含重复数字的列表，例如 N = {4,13,5,6,35,85,3}，对于任意 A ∈ N，B ∈ N, 使 A+B = 10 或 |A-B| = 10； 即两数之合为 10 或两数之差的绝对值为 10。
// 找出所有满足条件的数字对 {A,B} 的个数。(A, B的顺序与原始数组保持一致)
// 输入
// 一行文本由英文逗号分隔，如 6,4,16
// 输出
// 2

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    var arr = line.split(',')
        .map(x => {
            return parseInt(x)
        })
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        count += findIndex(arr, 10 - arr[i], i + 1)
        count += findIndex(arr, arr[i] + 10, i + 1)
        count += findIndex(arr, arr[i] - 10, i + 1)
    }
    console.log(count)
})

rl.on('close', () => {});

var findIndex = function(array, value, index) {
    var count = 0
    for (var i = index; i < array.length; i++) {
        value == array[i] ? count++ : ''
    }
    return count
}