// intervals1: [][number, number]
// intervals2: [][number, number]
// res: [][number, number]

    const res = [];
    let offset = 0

    for (let i = 0; i < intervals1.length; i++) {
        const [start1, end1] = intervals1[i];
        let hadIntersection = false;

        for (let j = offset; j < intervals2.length; j++) {
            const [start2, end2] = intervals2[j];


            if (end1 < start2 || start1 > end2) {
               if (hadIntersection) {
                   break
               }

                continue
            }

            res.push([
                Math.max(start1, start2),
                Math.min(end1, end2),
            ]);
            hadIntersection = true
            offset = j

        }
    }

    return res;
};

const runTests = () => {
    const tests = [
        {
            intervals1: [[1, 3], [5, 7], [9, 12]],
            intervals2: [[2, 4], [6, 8], [10, 11]],
            expected: [[2, 3], [6, 7], [10, 11]],
        },
        {
            intervals1: [[1, 5], [10, 15]],
            intervals2: [[6, 9], [16, 20]],
            expected: [],
        },
        {
            intervals1: [[1, 3], [4, 6]],
            intervals2: [[2, 5]],
            expected: [[2, 3], [4, 5]],
        },
        {
            intervals1: [[1, 2]],
            intervals2: [[1, 2]],
            expected: [[1, 2]],
        },
        {
            intervals1: [[1, 5]],
            intervals2: [[2, 3]],
            expected: [[2, 3]],
        },
        {
            intervals1: [[1, 2], [3, 4]],
            intervals2: [[5, 6]],
            expected: [],
        },
        {
            intervals1: [],
            intervals2: [[1, 2]],
            expected: [],
        },
        {
            intervals1: [[1, 2]],
            intervals2: [],
            expected: [],
        },
        {
            intervals1: [[1, 5], [6, 10]],
            intervals2: [[5, 7], [8, 12]],
            expected: [[5, 5], [6,7], [8, 10]],
        },
        {
            intervals1: [[1, 10]],
            intervals2: [[5, 5]],
            expected: [[5, 5]],
        },
    ];

    tests.forEach(({ intervals1, intervals2, expected }, index) => {
        const result = intersection(intervals1, intervals2);
        console.log(`Test ${index + 1}:`, JSON.stringify(result) === JSON.stringify(expected) ? 'Passed' : 'Failed');
    });
};

runTests()