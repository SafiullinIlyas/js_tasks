function isStringRotated(source, test) {
    if (source.length !== test.length)
        return false


    for (let i = 0; i < test.length; i++) {
        const rotate = source.slice(i, source.length) + source.slice(0, i)

        if (rotate === test)
            return true

    }

    return false
}
function isStringRotated2(source, test) {
    if (source.length !== test.length)
        return false

    function isPalindrome(str) {
        for (let index = 0; index < str.length; index++){
            if (str[index] !== str[str.length - 1 - index])
                return false
        }
        return true
    }

    return isPalindrome(source + test)
}
function isStringRotated2(source, test){
    if (source.length !== test.length)
        return false
    return (source + source).includes(test)
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false


