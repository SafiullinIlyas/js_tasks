function removeDupes1(str) {
    const arr = str.split('')
    const resultArr = [];
    for (let i = 0; i < arr.length; i++){
        const char = arr[i]
        if (resultArr.includes(char))
            continue

        resultArr.push(char)
    }
    return resultArr.join('')
}

function removeDupes2(str) {
    const map = {}

    for (let index = 0; index < str.length; index++) {
        const letter = str[index]
        if (map.hasOwnProperty(letter))
            continue

        map[letter] = index
    }
    const mapSize = Object.keys(map).length
    const array = Array(mapSize)
    Object.entries(map).forEach(([letter, index]) => array[index] = letter)
    return array.join('')
}

function removeDupes3(str) {
     const map = {}
     const res = []
    for (let index = 0; index < str.length; index++) {
        const letter = str[index]
        if (map.hasOwnProperty(letter))
            continue

        map[letter] = index
        res.push(letter)
    }
    return res.join('')
}


function removeDupes4(str) {
    return Array.from(new Set(str)).join('')
}



console.log(removeDupes4('abcd')) // -> 'abcd'
console.log(removeDupes4('aabbccdd')) // -> 'abcd'
console.log(removeDupes4('abcddbca')) // -> 'abcd'
console.log(removeDupes4('abababcdcdcd')) // -> 'abcd'