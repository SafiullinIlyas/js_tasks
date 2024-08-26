const tree1 = {
    v:5,
    c:[
        {
            v:10,
            c:[
                {
                    v:2,
                    c:[{
                        v:4,
                        c:[]
                    },
                        {v:2,
                        c:[]}
                    ]
                },
                {
                    v:4,
                    c:[{
                        v:3,
                    }]
                }
            ]
        },
        {
            v:15,
            c:[]
        }
    ]
}

function treeAccumulator (tree) {

    function treeAccumulatorPrivate(node) {
        let result = node.v
        if (!node.c)
            return result
        for (let i = 0; i < node.c.length; i++) {
            result += treeAccumulatorPrivate(node.c[i])
        }
        return result
    }
    return treeAccumulatorPrivate(tree)
}

function treeAccumulator2 (tree) {
    let sum = tree.v
    let stack = []

    if (!tree.c){
        return sum
    }

    tree.c.forEach(node=>stack.push(node)) //Заполняем стек

    while(stack.length) { //Работает пока в стеке что-то есть
        let node = stack.pop() //Достаем ноду
        sum += node.v
        if (node.c) {
            node.c.forEach(node => stack.push(node)) //Пихаем всех детей ноды в стек
        }
    }
    return sum
}

// Тест 1: Простейшее дерево с одним узлом
console.log(treeAccumulator2({ v: 10, c: [] })) // 10

// Тест 2: Дерево с двумя уровнями, один дочерний узел
console.log(treeAccumulator2({ v: 5, c: [{ v: 3, c: [] }] })) // 8

// Тест 3: Дерево с двумя уровнями, несколько дочерних узлов
console.log(treeAccumulator2({ v: 2, c: [{ v: 3, c: [] }, { v: 4, c: [] }] })) // 9

// Тест 4: Дерево с тремя уровнями, несколько дочерних узлов
console.log(treeAccumulator2({
    v: 1, c: [
        { v: 2, c: [] },
        { v: 3, c: [{ v: 4, c: [] }] }
    ]
})) // 10

// Тест 5: Дерево с четырьмя уровнями, более сложная структура
console.log(treeAccumulator2({
    v: 10, c: [
        { v: 5, c: [
                { v: 1, c: [] }
            ] },
        { v: 3, c: [
                { v: 2, c: [] },
                { v: 7, c: [
                        { v: 1, c: [] }
                    ] }
            ] }
    ]
})) // 29

// Тест 6: Дерево с отрицательными значениями
console.log(treeAccumulator2({
    v: -10, c: [
        { v: -5, c: [] },
        { v: -3, c: [
                { v: -2, c: [] },
                { v: -7, c: [
                        { v: -1, c: [] }
                    ] }
            ] }
    ]
})) // -28

// Тест 7: Дерево, где все узлы имеют значение 0
console.log(treeAccumulator2({
    v: 0, c: [
        { v: 0, c: [] },
        { v: 0, c: [
                { v: 0, c: [] },
                { v: 0, c: [
                        { v: 0, c: [] }
                    ] }
            ] }
    ]
})) // 0

// Тест 8: Пустое дерево (не должно возникать, но проверка для безопасности)
console.log(treeAccumulator2({ v: 0, c: [] })) // 0

// Тест 9: Дерево с глубокими вложениями и разветвленной структурой
console.log(treeAccumulator2({
    v: 100, c: [
        { v: 20, c: [
                { v: 10, c: [] },
                { v: 5, c: [
                        { v: 1, c: [] }
                    ] }
            ] },
        { v: 30, c: [
                { v: 25, c: [] },
                { v: 10, c: [
                        { v: 5, c: [] }
                    ] }
            ] }
    ]
})) // 206

// Тест 10: Дерево с разными типами значений
console.log(treeAccumulator2({
    v: 2.5, c: [
        { v: 1.5, c: [] },
        { v: -0.5, c: [{ v: 3, c: [] }] }
    ]
})) // 6.5
