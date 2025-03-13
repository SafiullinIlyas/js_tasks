const compose1 = (... callbacks) => {
    return (... args) => {
        if (!callbacks.length) {
            return;
        }

        let result = callbacks[callbacks.length -1](... args);
        let i = callbacks.length - 2
        while (i >= 0) {
            result = callbacks[i](result)
            i--
        }

        return result
    }
}

const compose2 = (... callbacks) => {
    return (... args) => callbacks.reduceRight((acc, cur) => {
        if (typeof cur !== 'function') {
            return undefined
        }

        if (Array.isArray(acc)) {
            return cur(... acc)
        }

        return cur(acc)
    }, callbacks.length ? args : undefined)
}

const runTests = () => {
    const compose = compose2
    // Тест 1: Должен возвращать null, если нет колбеков
    const test1 = compose()();
    console.log(test1 === undefined ? 'Test 1 passed' : 'Test 1 failed');

    // Тест 2: Должен применять один колбек
    const double = x => x * 2;
    const test2 = compose(double)(5);
    console.log(test2 === 10 ? 'Test 2 passed' : 'Test 2 failed');

    // Тест 3: Должен применять несколько колбеков в обратном порядке
    const add1 = x => x + 1;
    const multiply2 = x => x * 2;
    const test3 = compose(multiply2, add1)(3);
    console.log(test3 === 8 ? 'Test 3 passed' : 'Test 3 failed'); // (3 + 1) * 2 = 8

    // Тест 4: Должен работать с несколькими аргументами
    const concat = (a, b) => a + b;
    const toUpperCase = str => str.toUpperCase();
    const test4 = compose(toUpperCase, concat)('hello', ' world');
    console.log(test4 === 'HELLO WORLD' ? 'Test 4 passed' : 'Test 4 failed');

    // Тест 5: Должен возвращать результат последнего колбека, если нет других
    const returnFive = () => 5;
    const test5 = compose(returnFive)();
    console.log(test5 === 5 ? 'Test 5 passed' : 'Test 5 failed');

    // Тест 6: Должен работать с функциями, возвращающими функции
    const add = x => y => x + y;
    const test6 = compose(add(2), add(3))(5);
    console.log(test6 === 10 ? 'Test 6 passed' : 'Test 6 failed'); // (5 + 3) + 2 = 10
}

runTests()