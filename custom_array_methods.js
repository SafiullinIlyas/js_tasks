const arr = [1, 2, 3, 4, 5]

Array.prototype.myReduce = function (f, accStart) {
    let acc = accStart;
    this.forEach((item, index) => {
        acc = f(acc, item, index, this)
    })
    return acc;
}

Array.prototype.myMap = function (f) {
    const res = []

    this.forEach((item, index) => {
        res.push(f(item, index, this)
        )
    })
    return res
}

Array.prototype.myForEach = function (f) {
    this.forEach((item, index) => {
        f(item, index, this)
    })
}

Array.prototype.mySlice = function (start, end) {
    const newArr = []
    let startIndex;
    let endIndex;

    if (start < 0)
        startIndex = 0

    if (end > this.length)
        end = this.length

    if (start > this.length)
        return newArr

    if (end < 0)
        return newArr

    for (let i = startIndex; i < endIndex; i++) {
        newArr.push(this[i])
    }

    return newArr
}