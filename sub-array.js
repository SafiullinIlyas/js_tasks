function arraySubset(source, subset) {
    if (source.length < subset.length) return false

    const myMap = new Map()

    for (let el of source) {
        if (myMap.has(el))
            myMap.set(el, myMap.get(el) + 1)
        else
            myMap.set(el, 1)
    }

    for (let el of subset) {
        if (!myMap.has(el))
            return false

        if (myMap.get(el) < 1)
            return false

        myMap.set(el, myMap.get(el) - 1)

    }
    return true
}

function arraySubset2(source, subset) {
    if (source.length < subset.length) return false
    const copySource = [... source]

    for (let i = 0; i < subset.length; i++) {
        const index = copySource.indexOf(subset[i])

        if (index === -1)
            return false

        copySource.splice(index, 1)

    }

    return true
}

const arr1 = [1, 2, 3,4,5]
const arr2 = [1, 1, 1]

console.log(arraySubset2([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset2([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset2([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset2([1, 2], [1, 2, 3])) // -> false
console.log(arraySubset2(arr1, arr2)) // -> false
