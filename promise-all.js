const promiseAll = (... promises) => {
    let settledCount = 0;
    const result = Array(promises.length)

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            if (promise instanceof Promise) {
                promise
                    .then(data => result[index] = data)
                    .catch(err => reject(err))
                    .finally(() => {
                        settledCount++

                        if (settledCount === promises.length)
                            resolve(result)
                    })
            }

            else {
                result[index] = promise
                settledCount++

                if (settledCount === promises.length)
                    resolve(result)
            }
        })
    })
}

// Тест 1: Все промисы успешно разрешаются
const test1 = () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const p3 = Promise.resolve(3);

    promiseAll(p1, p2, p3).then(result => {
        console.assert(
            JSON.stringify(result) === JSON.stringify([1, 2, 3]),
            'Test 1 Failed'
        );
    }).catch(() => {
        console.error('Test 1 should not fail');
    });
};

// Тест 2: Один из промисов отклоняется
const test2 = () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.reject('Error');
    const p3 = Promise.resolve(3);

    promiseAll(p1, p2, p3).then(() => {
        console.error('Test 2 should not pass');
    }).catch(error => {
        console.assert(
            error === 'Error',
            'Test 2 Failed'
        );
    });
};

// Тест 3: Один из аргументов не является промисом (он должен сразу попасть в результат)
const test3 = () => {
    const p1 = 1; // не промис
    const p2 = Promise.resolve(2);
    const p3 = 'hello'; // не промис

    promiseAll(p1, p2, p3).then(result => {
        console.assert(
            JSON.stringify(result) === JSON.stringify([1, 2, 'hello']),
            'Test 3 Failed'
        );
    }).catch(() => {
        console.error('Test 3 should not fail');
    });
};

// Тест 4: Промисы с задержкой
const test4 = () => {
    const p1 = new Promise(resolve => setTimeout(() => resolve('first'), 300));
    const p2 = new Promise(resolve => setTimeout(() => resolve('second'), 100));
    const p3 = new Promise(resolve => setTimeout(() => resolve('third'), 200));

    promiseAll(p1, p2, p3).then(result => {
        console.assert(
            JSON.stringify(result) === JSON.stringify(['first', 'second', 'third']),
            'Test 4 Failed'
        );
    }).catch(() => {
        console.error('Test 4 should not fail');
    });
};

// Тест 5: Пустой массив промисов
const test5 = () => {
    promiseAll().then(result => {
        console.assert(
            JSON.stringify(result) === JSON.stringify([]),
            'Test 5 Failed'
        );
    }).catch(() => {
        console.error('Test 5 should not fail');
    });
};

// Запуск тестов
test1();
test2();
test3();
test4();
test5();
