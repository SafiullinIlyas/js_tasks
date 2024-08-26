


function checkBracketBalance(string) {
    const stack = []
    const bracketMap = {
        ")" : "(",
        "}" : "{",
        "]" : '['
    }

    for (let element of string) {
        if (element === '(' || element === '{' || element === '[') {
            stack.push(element)
        }

        if (element === ')' || element === '}' || element === ']') {
            if (bracketMap[element] !== stack.pop())
                return false

        }
    }

    return stack.length === 0
}

console.log(checkBracketBalance('(x + y) - (4)')) //  true
console.log(checkBracketBalance('(((10 ) ()) ((?)(:)))')) // true
console.log(checkBracketBalance('[{()}]')) //  true
console.log(checkBracketBalance('(50)(')) // false
console.log(checkBracketBalance('[{]}')) // false