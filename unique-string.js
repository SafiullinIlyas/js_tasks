/// 1
const isUnique1 = (str) => {
    return str.length === new Set(str.split('')).size
}

const isUnique2 = (str) => {
    const map = {}
    for (let letter of str){
        if (map[letter])
            return false
        map[letter] = letter
    }
    return true
}

const isUnique3 = (str) => {
    const set = new Set()

    for (let letter of str){
        if (set.has(letter))
            return false

        set.add(letter)
    }
    return true
}

const isUnique4 = (str) => {
    for (let index = 0; index < str.length; index++){
        const char = str[index]

        if (str.lastIndexOf(char) !== index)
            return false
    }
    return true
}



console.log(isUnique1('abc'))
console.log(isUnique2('aba'))
console.log(isUnique3('abaA'))
console.log(isUnique4('abaA'))
console.log(isUnique4('abcA'))
console.log(isUnique4('abdA'))

