const promiseAllSettled = (... promises) => {
    const result = Array(promises.length)
    let settledCount = 0

    return new Promise(resolve => {
            promises.forEach((promise, index) => {
                Promise.resolve(promise)
                    .then(data => result[index] = ({status:'fulfilled', value:data}))
                    .catch(err => result[index] = ({status:'rejected', reason:err}))
                    .finally(() => {
                        settledCount++
                        if (settledCount === promises.length){
                            resolve(result)
                        }
                    })
            })
    })
}

// Тест 1: Все промисы успешно выполняются
const test1 = () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const p3 = Promise.resolve(3);

    promiseAllSettled(p1, p2, p3).then(results => {
        console.assert(
            JSON.stringify(results) === JSON.stringify([
                { status: 'fulfilled', value: 1 },
                { status: 'fulfilled', value: 2 },
                { status: 'fulfilled', value: 3 }
            ]),
            'Test 1 Failed'
        );

    });
};

// Тест 2: Один промис отклонён
const test2 = () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.reject('error');
    const p3 = Promise.resolve(3);

    promiseAllSettled(p1, p2, p3).then(results => {
        console.assert(
            JSON.stringify(results) === JSON.stringify([
                { status: 'fulfilled', value: 1 },
                { status: 'rejected', reason: 'error' },
                { status: 'fulfilled', value: 3 }
            ]),
            'Test 2 Failed'
        );
    });
};

// Тест 3: Не все входные данные являются промисами
const test3 = () => {
    const p1 = 1; // не промис
    const p2 = Promise.resolve(2);
    const p3 = 'hello'; // не промис

    promiseAllSettled(p1, p2, p3).then(results => {
        console.assert(
            JSON.stringify(results) === JSON.stringify([
                { status: 'fulfilled', value: 1 },
                { status: 'fulfilled', value: 2 },
                { status: 'fulfilled', value: 'hello' }
            ]),
            'Test 3 Failed'
        );
    });
};

// Тест 4: Промисы с задержкой
const test4 = () => {
    const p1 = new Promise(resolve => setTimeout(() => resolve('delayed 1'), 100));
    const p2 = new Promise(resolve => setTimeout(() => resolve('delayed 2'), 200));
    const p3 = new Promise((_, reject) => setTimeout(() => reject('delayed error'), 150));

    promiseAllSettled(p1, p2, p3).then(results => {
        console.assert(
            JSON.stringify(results) === JSON.stringify([
                { status: 'fulfilled', value: 'delayed 1' },
                { status: 'fulfilled', value: 'delayed 2' },
                { status: 'rejected', reason: 'delayed error' }
            ]),
            'Test 4 Failed'
        );
    });
};

// Тест 5: Пустой массив промисов
const test5 = () => {
    promiseAllSettled().then(results => {
        console.assert(
            JSON.stringify(results) === JSON.stringify([]),
            'Test 5 Failed'
        );
    });
};

// Запуск тестов
test1();
test2();
test3();
test4();
test5();

