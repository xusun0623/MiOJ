/*jshint esversion: 6 */

let readline = require('readline');
const { off } = require('process');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    const arr = line.split("-")

    var max_length = arr[0].length > arr[1].length ? arr[0].length : arr[1].length
    var min_length = arr[0].length < arr[1].length ? arr[0].length : arr[1].length
    var max_value = arr[0].length > arr[1].length ? arr[0] : arr[1]
    var min_value = arr[0].length < arr[1].length ? arr[0] : arr[1]

    var result = []
    var offset = 1 //指针指向当前的相减位
    var is_minus = 0 //位数相减是否为负数
    while (offset <= max_length) {

        var smaller = ''
        if (offset <= min_length) {
            smaller = parseInt(min_value[min_length - offset])
        } else {
            smaller = 0
        }

        var larger = ''
        if (parseInt(max_value[max_length - offset]) - is_minus - smaller >= 0) {
            larger = parseInt(max_value[max_length - offset]) - is_minus
            is_minus = 0
        } else {
            larger = 10 + parseInt(max_value[max_length - offset]) - is_minus
            is_minus = 1
        }

        result.unshift(larger - smaller)
        offset++
    }
    while (!result[0]) result.splice(0, 1)
    console.log(result.join(""))

});

rl.on('close', () => {});