const binarySearch = (array, number) => {
    if (number > array[array.length - 1] || number < array[0])
        return false

    let from = 0
    let to = array.length

    while (to >= from) {
        let centerIndex = Math.floor((from + to) / 2);

        if(array[centerIndex] === number)
            return centerIndex

        if(array[centerIndex] >= number){
            to = centerIndex - 1
        }
        else {
            from = centerIndex + 1;
        }
    }

    return -1

}


console.log(binarySearch([1, 3, 6, 13, 17], 12)); // -1, так как 12 отсутствует в массиве
console.log(binarySearch([1, 3, 6, 13, 17], 13)); // 3, так как 13 находится на индексе 3
console.log(binarySearch([1, 3, 6, 13, 17], 1));  // 0, так как 1 находится на индексе 0
console.log(binarySearch([1, 3, 6, 13, 17], 17)); // 4, так как 17 находится на индексе 4
console.log(binarySearch([1, 3, 6, 13, 17], 6));  // 2, так как 6 находится на индексе 2
console.log(binarySearch([1, 3, 6, 13, 17], 0));  // -1, так как 0 меньше всех элементов в массиве
console.log(binarySearch([1, 3, 6, 13, 17], 20)); // -1, так как 20 больше всех элементов в массиве
console.log(binarySearch([5], 5));                // 0, так как единственный элемент 5 находится на индексе 0
console.log(binarySearch([5], 3));                // -1, так как 3 отсутствует в массиве
console.log(binarySearch([], 5));                 // -1, так как массив пустой и в нем нет элементов
console.log(binarySearch([2, 4, 6, 8, 10], 7));   // -1, так как 7 отсутствует в массиве
console.log(binarySearch([2, 4, 6, 8, 10], 2));   // 0, так как 2 находится на индексе 0
console.log(binarySearch([2, 4, 6, 8, 10], 10));  // 4, так как 10 находится на индексе 4


