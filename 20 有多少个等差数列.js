// 描述
// 等差数列是常见数列的一种，如果一个数列从第二项起，每一项与它的前一项的差等于同一个常数，
// 这个数列就叫做等差数列，而这个常数叫做等差数列的公差，公差常用字母d表示。即对于数列S，
// 它满足了(S[i]-S[i-1]) = d (i \gt 1)(S[i]−S[i−1])=d(i>1)。 
// 显然，一个数字无法构成等差数列，而任意两个数字可以形成一个等差数列。 
// 这里给出了一个长度为N (0 \lt N \lt 200)N(0<N<200)的数字序列，
// 每个位置有一个整数(-100 \le \text{整数} \le 100)(−100≤整数≤100)，
// 需要找到这个数字序列里包含多少个等差数列，序列顺序固定，无需排序。 
// 输入数据格式：\text{S[0] S[1] S[2] ... S[N]}S[0] S[1] S[2] ... S[N]
// （以半角空格符分隔，N \gt 1N>1） 输出数据格式：等差数列数量 MM； 其中数列 SS 的项为整数

// 输入
// 输入一个数列[ 2 7 4 5 6 ]，该数列包含等差数列： [ 2 7 ] [ 2 4 ] [ 2 5 ] [ 2 6 ] [ 7 4 ] [ 7 5 ] [ 7 6 ] [ 4 5 ] [ 4 6 ] [ 5 6 ] [ 2 4 6 ] [ 4 5 6 ]

// 输出
// 上例共包含12组等差数列，故应输出12

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log(solution(line))
})

rl.on('close', () => {});

function solution(line) {
    const arr = line.split(' ').map(v => v / 1)
    const al = arr.length
    if (al < 3) return 1

    const it = (a, b, idx) => {

        const d = b - a
        const sh = b + d
        console.log(a, b, idx, '  ', d, sh)

        let res = 0
        let r = arr.indexOf(sh, idx + 1)
        while (r > -1) {
            res += 1
            res += it(b, sh, r)
            r = arr.indexOf(sh, r + 1)
        }
        // console.log(res)
        return res
    }

    let res = 0
    const two = []
    for (let i = 0; i < al - 1; i++) {
        for (let j = i + 1; j < al; j++) {
            res += 1
            res += it(arr[i], arr[j], j)
        }
    }
    return res
}