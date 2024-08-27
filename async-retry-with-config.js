const asyncRetryWithConfig = (cb, config) => {
    let counter = 0;
    return new Promise((resolve, reject) => {
        function tryResolvePromise() {
            if (!config.count)
                return reject('No attempts')

            cb()
                .then(res => resolve(res))
                .catch((err) => {
                    counter++

                    if (counter >= config.count)
                        return reject(err)



                    setTimeout(() =>{
                        tryResolvePromise()
                    }, config.delay)
                })
        }
        tryResolvePromise()
    })
}


const failingFunction = () => {
    return new Promise((resolve, reject) => {
        console.log("Attempting...");
        reject("Failed");
    });
};

const config = { count: 3, delay: 1000 };

asyncRetryWithConfig(failingFunction, config)
    .then((res) => console.log("Success:", res))
    .catch((err) => console.log("Final Error:", err));


// Вспомогательная функция для тестов, которая будет завершаться с ошибкой определённое количество раз
const createFailingFunction = (failuresBeforeSuccess) => {
    let attempts = 0;
    return () => new Promise((resolve, reject) => {
        if (attempts < failuresBeforeSuccess) {
            attempts++;
            reject(`Failed on attempt ${attempts}`);
        } else {
            resolve(`Success on attempt ${attempts}`);
        }
    });
};

// Тест 1: Успешное выполнение с первого раза
const test1 = () => {
    const config = { count: 3, delay: 100 };
    const cb = () => Promise.resolve("Success");

    asyncRetryWithConfig(cb, config)
        .then(result => {
            console.assert(result === "Success", 'Test 1 Failed');
        })
        .catch(() => {
            console.error('Test 1 should not fail');
        });
};

// Тест 2: Успех после нескольких неудачных попыток
const test2 = () => {
    const config = { count: 3, delay: 100 };
    const cb = createFailingFunction(2);

    asyncRetryWithConfig(cb, config)
        .then(result => {
            console.assert(result === "Success on attempt 2", 'Test 2 Failed');
        })
        .catch(() => {
            console.error('Test 2 should not fail');
        });
};

// Тест 3: Превышение количества попыток
const test3 = () => {
    const config = { count: 2, delay: 100 };
    const cb = createFailingFunction(3);

    asyncRetryWithConfig(cb, config)
        .then(() => {
            console.error('Test 3 should not pass');
        })
        .catch(error => {
            console.assert(error === "Failed on attempt 2", 'Test 3 Failed');
        });
};

// Тест 4: Проверка, что задержка работает
const test4 = () => {
    const config = { count: 2, delay: 200 };
    const cb = createFailingFunction(1);
    const startTime = Date.now();

    asyncRetryWithConfig(cb, config)
        .then(result => {
            const endTime = Date.now();
            console.assert(result === "Success on attempt 1", 'Test 4 Failed');
            console.assert(endTime - startTime >= 200, 'Test 4 Failed: Delay did not work');
        })
        .catch(() => {
            console.error('Test 4 should not fail');
        });
};

// Тест 5: Отсутствие попыток (начальная конфигурация с count = 0)
const test5 = () => {
    const config = { count: 0, delay: 100 };
    const cb = createFailingFunction(1);

    asyncRetryWithConfig(cb, config)
        .then(() => {
            console.error('Test 5 should not pass');
        })
        .catch(error => {
            console.assert(error === 'No attempts', 'Test 5 Failed');
        });
};

// Запуск тестов
test1();
test2();
test3();
test4();
test5();
