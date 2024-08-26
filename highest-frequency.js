function highestFrequency(array) {
    const map = {}

    for (let string of array) {
        if (map[string])
            map[string] = map[string] + 1;
        else {
            map[string] = 1
        }
    }
    const mostPopularLetter = Object.entries(map).reduce((acc, [currLetter, value]) => {
        if (value > map[acc])
            acc = currLetter

        return acc
    }, array[0])
    return mostPopularLetter
}

function highestFrequency2(array) {
    const map = {}
    let maxFrequency = 1
    let maxFrequencyString = array[0]

    for (let string of array) {
        if (map[string])
            map[string] = map[string] + 1;
        else {
            map[string] = 1
        }

        if (maxFrequency < map[string]){
            maxFrequency = map[string]
            maxFrequencyString = string
        }
    }
    return maxFrequencyString
}

console.log(highestFrequency2(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency2(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency2(['abc', 'def'])) // -> abc
console.log(highestFrequency2(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) //