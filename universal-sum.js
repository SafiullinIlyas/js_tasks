function add(num1, num2) {
    if (num1 === undefined){
        return add.bind(null)
    }

    if (num2 === undefined){

        return add.bind(null, num1)
    }
    return num1 + num2
}

function add2(num1, num2) {
    if (num1 === undefined){
        return (num1, num2) => add(num1, num2)
    }

    if (num2 === undefined){

        return (num2) => add(num1, num2)
    }
    return num1 + num2
}

console.log(add2(20, 22)) // -> 42
console.log(add2(20)(22))// -> 42
console.log(add2(20)()(22)) // -> 42
console.log(add2(20)()()()(22)) // -> 42
console.log(add2(20)()()()()()()()()()()()(22)) // -> 42
console.log(add2()(20)(22)) // -> 42
console.log(add2()()()()(20)(22)) // -> 42
console.log(add2()(20)()(22)) // -> 42
console.log(add2()()()()()(20)()()()(22)) // -> 42