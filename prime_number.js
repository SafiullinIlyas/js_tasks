function isPrime(num) {
    if (typeof num !== 'number')
        throw new TypeError(`${num} is not number. Type of ${num}: ${typeof num}`);

    if (num !== parseInt(num))
        throw new TypeError(`${num} is not an integer number`);

    if (num < 1) {
        return false
    }

    for (let i = 2; i <= Math.floor(num / 2) + 1; i++) {
        if (num % i === 0) return false
    }

    return true
}

function getDividers(num) {
    if (typeof num !== 'number')
        throw new TypeError(`${num} is not number. Type of ${num}: ${typeof num}`);

    if (num !== parseInt(num))
        throw new TypeError(`${num} is not an integer number`);

    if (num < 1) {
        return false
    }

    const res = [num]

    for (let i = 2; i <= Math.floor(num / 2) + 1; i++) {
        if (num % i === 0) res.push(i)
    }

    return res
}


console.log(getDividers(40));