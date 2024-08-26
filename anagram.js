function allAnagrams(array) {
    const lengthChecking = array.reduce((acc, curr) => {
        return array[0].length === curr.length && acc;

    }, true)

    if (!lengthChecking) return false

    let myMap = new Map()

    for (let el of array[0]) {
        if (myMap.has(el))
            myMap.set(el, myMap.get(el) + 1)
        else
            myMap.set(el, 1)
    }

    const myMapOrigin = new Map(myMap.entries())

    for (let i = 1; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++) {
            const char = array[i][j]
            if (!myMap.has(char))
                return false

            if (myMap.get(char) < 1)
                return false
            myMap.set(char, myMap.get(char) - 1)
        }
        myMap = new Map(myMapOrigin.entries())
    }

    return true

}

function allAnagrams2(array) {

    const copyArr = [... array].map(string => {
        const stringArrSorted = string.split('').sort((a,b) => a.localeCompare(b))
        return stringArrSorted.join('')
    })

    return copyArr.reduce((acc, curr) => {
        return curr === array[0] && acc
    }, true)


}

console.log(allAnagrams2(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams2(['abcd', 'bdXc', 'cabd'])) // false
console.log(allAnagrams2(['abcd', 'bdc', 'cabd'])) // false