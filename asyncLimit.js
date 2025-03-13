const asyncLimit = (callback, delay) => {
    const delayError = 'Превышен лимит ожидания'

    return (... args) => {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject(delayError)
            }, delay)

            callback(... args)
                .then(resolve)
                .catch(reject)
                .finally(() => {
                    clearTimeout(timer)
                })
        })
    }
}

const asyncLimit2 = (callback, delay) => {
    const delayError = 'Превышен лимит ожидания'

    return (... args) => {
        return Promise.race([callback(... args), new Promise((_, reject) => setTimeout(() => reject(delayError),delay))])
    }
}


const fn = async (n) => {
    await new Promise(res => setTimeout(res, 100))

    return n * n
}

asyncLimit2(fn, 50)(5).then(console.log).catch(console.log) // rejected
asyncLimit2(fn, 150)(5).then(console.log).catch(console.log) // resolved

const fn2 = async (a, b) => {
    await new Promise(res => setTimeout(res, 120))

    return a * b
}

asyncLimit2(fn2, 100)(1, 2).then(console.log).catch(console.log) // rejected
asyncLimit2(fn2, 150)(1,2).then(console.log).catch(console.log) // resolved