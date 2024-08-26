const groupBy = (array, f) => {
    const map = {}

    array.forEach(item => {
        const key = typeof f === 'string' ? item[f] : f(item)

        if (!map.hasOwnProperty(key)) {
            map[key] = [item]
        }
        else
            map[key].push(item)
    })

    return map
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(['one', 'two', 'three'], 'length')); // -> { '3': ['one', 'two'], '5': ['three'] }