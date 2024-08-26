function flatten1(array) {
    const res = []

    function flattenRecursive(array) {
        for (let element of array) {
            if (!Array.isArray(element))
                res.push(element)
            else
                flattenRecursive(element)
        }
    }
    flattenRecursive(array)
    return res
}

const flatten2 = (array) => {
    const res = []
    for (let element of array) {
        if (!Array.isArray(element))
            res.push(element)
        else
        {
            const result = flatten2(element)
            result.forEach(el => res.push(el))
        }
    }

    return res
}




console.log(flatten2([[1], [[2, 3]], [[[4]]]]));