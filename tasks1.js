const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']
// 1# {kiwi:3, apple:2, orange:1} count every fruit

const map1 = fruits.reduce((acc, fruit) => {
    if (!acc.hasOwnProperty(fruit)) {
        acc[fruit] = 1
    }
    else
        acc[fruit]++
    return acc
}, {})
// console.log(map1)

// 2# ['kiwi','apple','orange']

const arr2 = [... new Set(fruits)]
const arr2_2 = []
const map2 = {}
fruits.forEach(fruit => {
    if (!map2.hasOwnProperty(fruit)) {
        map2[fruit] = true
        arr2_2.push(fruit)
    }
})
// console.log(arr2)
// console.log(arr2_2)

//---------------------------
// 3# Group by age
const students = [
    {name:'alex', age:20},
    {name:'petya', age:21},
    {name:'mike', age:13},
    {name:'sasha', age:15},
    {name:'vanya', age:13},
    {name:'stas', age:22},
    {name:'misha', age:20},
]

const map3 = {}
students.forEach(student => {
    const key = student.age
    if (!map3.hasOwnProperty(key)) {
        map3[key] = [student]
    }
    else
        map3[key].push(student)
})
// console.log(map3)

// 4# reverse string
const myString = 'pizza'

const reverseString1 = myString.split('').reverse().join('')
const reverseString2 = myString.split('').reduceRight((string, char) => string + char, '')


// console.log(reverseString1)
console.log(reverseString2)
