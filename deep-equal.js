const deepEqual = (element1, element2) => {
    function deepEqualPrivate(elem1, elem2) {
        if (typeof elem1 !== typeof elem2)
            return false

        if (!(typeof elem1 === 'object' || typeof elem1 === 'function' || Array.isArray(elem1))) {
            return Object.is(elem1, elem2)
        }

        if (typeof elem1 === 'function')
            return elem1 === elem2

        if (Array.isArray(elem1)) {
            if (elem1.length !== elem2.length)
                return false

            for (let i = 0; i < elem1.length; i++) {
                if (!deepEqualPrivate(elem1[i], elem2[i]))
                    return false
            }
            return true
        }

        if (elem1 === null)
            return true

        const keys1 = Object.keys(elem1)
        const keys2 = Object.keys(elem1)

        if (keys1.length !== keys2.length)
            return false

        for (let key of keys1) {
            if (!deepEqual(elem1[key], elem2[key])) {
                return false
            }
        }

        for (let key of keys2) {
            if (!deepEqual(elem1[key], elem2[key])) {
                return false
            }
        }

        return true

    }

    return deepEqualPrivate(element1, element2)
}


console.log(deepEqual(1, 1));                        // true, одинаковые числа
console.log(deepEqual('test', 'test'));              // true, одинаковые строки
console.log(deepEqual(true, true));                  // true, одинаковые булевы значения
console.log(deepEqual(null, null));                  // true, оба значения null
console.log(deepEqual(undefined, undefined));        // true, оба значения undefined
console.log(deepEqual(NaN, NaN));                    // true, NaN равен NaN в deepEqual
console.log('----------------------------------------------------------------')
// Функция deepEqual должна возвращать false для разных простых типов данных
console.log(deepEqual(1, '1'));                      // false, разные типы данных (число и строка)
console.log(deepEqual(null, undefined));             // false, null не равно undefined
console.log(deepEqual(true, false));                 // false, разные булевы значения
console.log('----------------------------------------------------------------')
// Функция deepEqual должна корректно сравнивать объекты
console.log(deepEqual({ a: 1 }, { a: 1 }));          // true, одинаковые объекты с одинаковыми свойствами
console.log(deepEqual({ a: 1 }, { a: 2 }));          // false, одинаковые объекты с разными значениями свойств
console.log(deepEqual({ a: 1, b: 2 }, { a: 1 }));    // false, разные наборы свойств
console.log(deepEqual({}, {}));                      // true, оба объекта пустые
console.log(deepEqual({ a: { b: 2 } }, { a: { b: 2 } })); // true, вложенные объекты с одинаковыми свойствами
console.log('----------------------------------------------------------------')
// Функция deepEqual должна корректно сравнивать массивы
console.log(deepEqual([1, 2, 3], [1, 2, 3]));        // true, одинаковые массивы
console.log(deepEqual([1, 2, 3], [3, 2, 1]));        // false, разные массивы
console.log(deepEqual([1, 2], [1, 2, 3]));           // false, массивы разной длины
console.log(deepEqual([], []));                      // true, оба массива пустые
console.log(deepEqual([1, [2, 3]], [1, [2, 3]]));    // true, вложенные массивы с одинаковыми элементами
console.log('----------------------------------------------------------------')
// Функция deepEqual должна корректно сравнивать функции
const fn1 = () => 1;
const fn2 = () => 1;
console.log(deepEqual(fn1, fn1));                    // true, одна и та же функция
console.log(deepEqual(fn1, fn2));                    // false, разные функции, даже если они идентичны по содержанию
console.log('----------------------------------------------------------------')
// Функция deepEqual должна корректно обрабатывать смешанные типы данных
console.log(deepEqual({ a: [1, 2, 3], b: 'test' }, { a: [1, 2, 3], b: 'test' })); // true, объект с массивом и строкой одинаковы
console.log(deepEqual({ a: [1, 2, 3], b: 'test' }, { a: [1, 2], b: 'test' }));    // false, вложенные массивы различаются
console.log('----------------------------------------------------------------')
// Функция deepEqual должна корректно обрабатывать null и undefined в сложных структурах
console.log(deepEqual({ a: null }, { a: null }));    // true, объекты с null значениями одинаковы
console.log(deepEqual({ a: undefined }, { a: null })); // false, undefined не равно null
console.log(deepEqual([undefined], [undefined]));   // true, массивы с undefined элементами одинаковы