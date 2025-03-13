// limit - additional attempts to call fn
// fn - function which limited
// callback called when last fn called

function callLimit(fn, limit, callback) {
    let count = 0

    const f = async function (...args) {

        if (limit >= count) {
            await fn(...args)
            count += 1;
            if (limit < count) {
                callback()
            }

        }
    }
    f.reset = () => { count = 0 }

    return f
}
const limitedLog = callLimit(console.log, 3, console.log.bind(null, 'done'))

const run = async () => {
    await limitedLog('a')
    await limitedLog('b')
    await limitedLog('c')
    await limitedLog('d')
    await limitedLog('e')
    await limitedLog('e')
    limitedLog.reset()
    await limitedLog('e')
    await limitedLog('f')
    await limitedLog('g')
}

run();