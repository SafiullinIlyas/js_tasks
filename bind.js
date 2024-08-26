Function.prototype.myBind = function(context, ... args) {
    return (... args2) => this.call(context, ... args.concat(args2))
}

Function.prototype.myBind2 = function(context, ... args) {
    const cb = this
    return function (... args2) {
        return cb.call(context, ...args.concat(args2))
    }
}