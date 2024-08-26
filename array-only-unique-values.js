function only_unique_values(arr) { //O(n)
    const map = {}
    arr.forEach(item => {
        if (!map.hasOwnProperty(item)) {
            map[item] = 1
        } else
            map[item]++
    })

    return Object.entries(map).reduce((acc,[key,value]) => {
        if (value === 1)
            acc.push(key)
        return acc
    }, [])
}

// Тест 1: Обычный случай с несколькими дублирующимися значениями
console.log(only_unique_values([1, 2, 3, 4, 5, 6, 12, 3, 4, 5])) // [1, 2, 6, 12]

// Тест 2: Все значения уникальны
console.log(only_unique_values([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]

// Тест 3: Все значения повторяются
console.log(only_unique_values([1, 1, 2, 2, 3, 3])) // []

// Тест 4: Пустой массив
console.log(only_unique_values([])) // []

// Тест 5: Массив с одним элементом
console.log(only_unique_values([42])) // [42]

// Тест 6: Массив с дублирующимися и уникальными строками
console.log(only_unique_values(['a', 'b', 'a', 'c', 'd', 'd'])) // ['b', 'c']

// Тест 7: Массив с различными типами данных
console.log(only_unique_values([1, '1', 2, '2', 3, '3', 1])) // ['1', 2, '2', 3, '3']

// Тест 8: Массив с большими числами
console.log(only_unique_values([1000000, 999999, 1000000, 999998])) // [999999, 999998]

// Тест 9: Массив с нулями и отрицательными числами
console.log(only_unique_values([0, -1, 0, -2, -2, 1])) // [-1, 1]

// Тест 10: Массив с одинаковыми числами
console.log(only_unique_values([2, 2, 2, 2, 2])) // []

// Тест 11: Массив с отрицательными и положительными числами
console.log(only_unique_values([-1, -2, -3, 1, 2, 3, -1, 2])) // [-2, -3, 1, 3]

// Тест 12: Массив, содержащий `null`, `undefined` и `NaN`
console.log(only_unique_values([null, undefined, NaN, null, NaN])) // [undefined]

// Тест 13: Массив, содержащий boolean значения
console.log(only_unique_values([true, false, true, false, true])) // []

// Тест 14: Массив с длинными строками и одинаковыми префиксами
console.log(only_unique_values(["apple", "applet", "apple", "banana", "banana"])) // ["applet"]

// Тест 15: Массив с одним элементом, повторенным несколько раз
console.log(only_unique_values([42, 42, 42, 42, 42])) // []

// Тест 16: Массив с одинаковыми числами, но разными знаками
console.log(only_unique_values([-1, 1, -1, 1, -2])) // [-2]

// Тест 17: Массив с пустыми строками и null-значениями
console.log(only_unique_values(["", "", null, null, "non-empty"])) // ["non-empty"]

// Тест 18: Массив с объектами и массивами
console.log(only_unique_values([{a: 1}, {a: 1}, [1, 2], [1, 2], {b: 2}])) // [{b: 2}]

// Тест 19: Массив с одинаковыми числами, но разными типами (число и строка)
console.log(only_unique_values([1, '1', 1, '2', 2])) // ['1', '2', 2]

// Тест 20: Массив с дублирующимися значениями, повторенными более двух раз
console.log(only_unique_values([5, 5, 5, 10, 10, 10, 15])) // [15]

