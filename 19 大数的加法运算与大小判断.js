// 描述
// 对于给定的算术表达式，按规则输出计算结果，仅包含加法和大小判断。

// 输入
// 一行字符串，为加号、大于、小于( + < > ) 连接的两个不限大小的非负整数。

// 输出
// 当符号为 + 时, 计算两个数相加的和, 并以字符串格式返回； 当符号为 < 时, 如果左数小于右数, 返回大写字母字符 Y, 否则返回大写字母字符 N； 当符号为 > 时, 如果左数大于右数, 返回大写字母字符 Y, 否则返回大写字母字符 N。

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    if (!line.indexOf('+') && !line.indexOf('<') && !line.indexOf('>')) {
        return //目标鉴别失败，没有+，<，>
    }
    if (line.indexOf('+') > 0) {
        [arr1, arr2] = line.split("+")
        add(arr1, arr2)
        return
    }
    if (line.indexOf('>') > 0) {
        [arr1, arr2] = line.split(">")
        console.log(whoBig(arr1, arr2) == 0 ? 'Y' : 'N')
        return
    }
    if (line.indexOf('<') > 0) {
        [arr1, arr2] = line.split("<")
        console.log(whoBig(arr1, arr2) == 1 ? 'Y' : 'N')
        return
    }



})

rl.on('close', () => {});

var whoBig = function(arr1, arr2) {
    // console.log(arr1, arr2)
    if (arr1.length > arr2.length) return 0
    if (arr2.length > arr1.length) return 1
    if (arr1 == arr2) return 2
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) return 0
        if (arr1[i] < arr2[i]) return 1
    }
}

var add = function(arr1, arr2) {
    // console.log(arr1, arr2)
    var max_length = arr1.length > arr2.length ? arr1.length : arr2.length
    var min_length = arr1.length < arr2.length ? arr1.length : arr2.length
    var max_value = whoBig(arr1, arr2) == 0 ? arr1 : arr2
    var min_value = whoBig(arr1, arr2) == 1 ? arr1 : arr2

    for (var i = 0; i < max_length - min_length; i++) {
        min_value = '0' + min_value
    }

    var tmp = []
    var tmp_first = 0
    var add_1 = 0
    for (var j = max_length - 1; j >= 0; j--) {
        if (parseInt(max_value[j]) + parseInt(min_value[j]) + add_1 >= 10) {
            tmp[j] = parseInt(max_value[j]) + parseInt(min_value[j]) + add_1 - 10
            add_1 = 1

        } else {
            tmp[j] = parseInt(max_value[j]) + parseInt(min_value[j]) + add_1
            add_1 = 0
        }
    }
    // console.log(max_value, min_value)
    console.log('' + (add_1 == 0 ? '' : 1) + tmp.join(''))

}