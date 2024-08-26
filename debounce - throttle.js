const debounce = (callback, delay) => {
    let timeOut;

    return function(... args) {
        clearTimeout(timeOut)
        timeOut = setTimeout(callback.bind(this, ... args), delay)
    }
}

const throttle = (callback, delay) => {

    let isUsed = false

    return function(...args) {
        if (isUsed)
            false

        callback.apply(this, args)
            isUsed = true
            timeOut = setTimeout(() => {isUsed = false}, delay)
    }
}


const curry = (callback) => {

    return function curried(... args) {
        if (args.length > callback.length) {
            return callback.call(this, ... args)
        }

        return curried.bind(this, ... args) 


    }
}



function myDebounce(callback, delay) {

    let timeOutId

    return function (... args) {

        clearInterval(timeOutId)
        timeOutId = setTimeout(() => {
            callback.apply(this, args)
        }, delay)
    }
}

function myThrottle(callback, delay) {

    let isUsed = false

    return function (... args) {

        if (!isUsed)
            return

        callback.apply(this, args)
        isUsed = true
        setTimeout(() => {
            isUsed = false
        }, delay)
    }
}


function carry(f) {
    return function curried(... args) {
        const paramsCount = f.length

        if (paramsCount <= args.length)
            return f.apply(this, args)

        return curried.bind(this, ... args)

    }
}