const getIntevals = (array) => {
    let result = ''

    if (!Array.isArray(array) || array.length === 0)
        return result


    const sortedArray = [... array].sort((a, b) => a - b)

    let start = sortedArray[0]
    let end = sortedArray[0]

    for (let i = 1; i < sortedArray.length; i++) {
        const previous = sortedArray[i - 1]
        const current = sortedArray[i]

        if (current - 1 === previous) {
            end++
        }
        else {
            result += start === end ? `${start},` : `${start}-${end},`
            start = current
            end = current
        }
    }

    result += start === end ? `${start}` : `${start}-${end}`


    return result
}

const runTests = () => {
    const testCases = [
        { input: [1, 4, 5, 2, 3, 9, 8, 11, 0], expected: '0-5,8-9,11' },
        { input: [1, 4, 3, 2], expected: '1-4' },
        { input: [], expected: '' },
        { input: [5], expected: '5' },
        { input: [1, 2, 3, 4, 5], expected: '1-5' },
        { input: [10, 12, 11, 15, 14], expected: '10-12,14-15' },
        { input: [1, 3, 5, 7], expected: '1,3,5,7' },
        { input: [0, 1, 2, 4, 5, 6, 8, 9], expected: '0-2,4-6,8-9' },
        { input: [100, 101, 102, 200, 201], expected: '100-102,200-201' },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = getIntevals(input);
        console.assert(result === expected, `Test case ${index + 1} failed: expected "${expected}", got "${result}"`);
    });

    console.log('All tests passed!');
};

// Запуск тестов
runTests();
