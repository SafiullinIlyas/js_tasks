const sum = (a,b,c) => a + b + c

const curry = (fn) => {
    return (...args) => {
        if (fn.length <= args.length) {
            return fn(...args);
        }

        return curry(fn.bind(null,... args))
    };
};



console.log(curry(sum)(1)(6)(45))
