const START = Date.now()

function someFn() {
    console.log('time', Date.now() - START)
    console.log('args', arguments)
}

Function.prototype.delay = function(delay) {
    return async (... args) => {
        await new Promise(resolve => setTimeout(resolve, delay))
        return this(... args)
    }
}

const f = someFn.delay(500)

f('arg1', 'arg2', 1, 2)