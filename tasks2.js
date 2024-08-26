function zero(f) {
    if (f === undefined)
        return 0

    return f(0)
}

function one(f) {
    if (f === undefined)
        return 1

    return f(1)
}

function two(f) {
    if (f === undefined)
        return 2

    return f(2)
}

function three(f) {
    if (f === undefined)
        return 3

    return f(3)
}

function four(f) {
    if (f === undefined)
        return 4

    return f(4)
}

function five(f) {
    if (f === undefined)
        return 5

    return f(5)
}

function six(f) {
    if (f === undefined)
        return 6

    return f(6)
}

function seven(f) {
    if (f === undefined)
        return 7

    return f(7)
}

function eight(f) {
    if (f === undefined)
        return 8

    return f(8)
}

function nine(f) {
    if (f === undefined)
        return 9

    return f(9)
}


function plus (arg) {
    return (num1) => num1 + arg
}

function minus (arg) {
    return (num1) => num1 - arg
}

function mult(arg) {
    return (num1) => num1 * arg
}

function divide(arg) {
    return (num1) => num1 / arg
}


// Тесты для сложения
console.log(one(plus(one()))) // 2
console.log(four(plus(five()))) // 9
console.log(seven(plus(two()))) // 9
console.log(nine(plus(nine()))) // 18
console.log('------------------------------------------------')
// Тесты для вычитания
console.log(nine(minus(three()))) // 6
console.log(five(minus(four()))) // 1
console.log(seven(minus(two()))) // 5
console.log(three(minus(one()))) // 2
console.log('------------------------------------------------')

// Тесты для умножения
console.log(two(mult(three()))) // 6
console.log(four(mult(five()))) // 20
console.log(six(mult(seven()))) // 42
console.log(eight(mult(two()))) // 16
console.log('------------------------------------------------')

// Тесты для деления
console.log(nine(divide(three()))) // 3
console.log(six(divide(two()))) // 3
console.log(eight(divide(four()))) // 2
console.log(two(divide(five()))) // 0.4
console.log('------------------------------------------------')

// Тесты для возврата числа без операции
console.log(zero()) // 0
console.log(three()) // 3
console.log(five()) // 5
console.log(nine()) // 9
console.log('------------------------------------------------')
