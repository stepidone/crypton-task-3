var arr = [88, 494, 4, 84, 944, 449, 48, 8, 7, 8, 6, 0, 0, 9, 1, 4]

arr.sort(function(a, b){
    var digits = a.toString().split('');
    var aaa = digits.map(Number)
    var digits = b.toString().split('');
    var bbb = digits.map(Number)
    let aa = 0
    let bb = 0
    for (let i = 0; i < aaa.length; i++) {
        if (aaa[i] == 8) {
            aa += 2
        }
        if (aaa[i] == 4 || aaa[i] == 6 || aaa[i] == 9 || aaa[i] == 0) {
            aa += 1
        }
    }
    for (let i = 0; i < bbb.length; i++) {
        if (bbb[i] == 8) {
            bb += 2
        }
        if (bbb[i] == 4 || bbb[i] == 6 || bbb[i] == 9 || bbb[i] == 0) {
            bb += 1
        }
    }

    if (aa < bb) {
        return -1
    }
    if (aa == bb) {
        if (aaa.length == bbb.length) {
            for (let i = 0; i < aaa.length; i++) {
                if (aaa[i] <= bbb[i]) {
                    return -1
                }
                if (aaa[i] >= bbb[i]) {
                    return 1
                }
            }
        }
        if (aaa.length < bbb.length) {
            return -1
        }
    }
})

console.log(arr);