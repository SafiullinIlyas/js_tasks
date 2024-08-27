const promiseRace = (... promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            if (promise instanceof Promise) {
                promise
                    .then(data => resolve(data))
                    .catch(err => reject(err))
            }
            else {
                resolve(promise)
            }
        })
    })
}





const test1 = () => {
    const p1 = new Promise(resolve => setTimeout(() => resolve('first'), 100));
    const p2 = new Promise(resolve => setTimeout(() => resolve('second'), 200));
    const p3 = new Promise(resolve => setTimeout(() => resolve('third'), 300));

    promiseRace(p1, p2, p3).then(result => {
        console.assert(result === 'first', 'Test 1 Failed');
    });
};

// Тест 2: Один из промисов отклоняется первым
const test2 = () => {
    const p1 = new Promise((_, reject) => setTimeout(() => reject('error'), 100));
    const p2 = new Promise(resolve => setTimeout(() => resolve('second'), 200));
    const p3 = new Promise(resolve => setTimeout(() => resolve('third'), 300));

    promiseRace(p1, p2, p3).catch(error => {
        console.assert(error === 'error', 'Test 2 Failed');
    });
};

// Тест 3: Один из переданных аргументов не является промисом (он возвращается немедленно)
const test3 = () => {
    const p1 = new Promise(resolve => setTimeout(() => resolve('first'), 200));
    const p2 = "immediate result";
    const p3 = new Promise(resolve => setTimeout(() => resolve('third'), 300));

    promiseRace(p1, p2, p3).then(result => {
        console.assert(result === "immediate result", 'Test 3 Failed');
    });
};

// Тест 4: Все промисы разрешаются (функция должна вернуть результат самого быстрого промиса)
const test4 = () => {
    const p1 = new Promise(resolve => setTimeout(() => resolve('first'), 300));
    const p2 = new Promise(resolve => setTimeout(() => resolve('second'), 200));
    const p3 = new Promise(resolve => setTimeout(() => resolve('third'), 100));

    promiseRace(p1, p2, p3).then(result => {
        console.assert(result === 'third', 'Test 4 Failed');
    });
};

// Тест 5: Пустой массив промисов
const test5 = () => {
    promiseRace().then(result => {
        console.assert(result === undefined, 'Test 5 Failed');
    });
};

// Запуск тестов
test1();
test2();
test3();
test4();
test5();