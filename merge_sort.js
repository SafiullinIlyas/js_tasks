function merge(left, right) {

    let arr = []

    while (left.length && right.length) {

        if (left[0] < right[0]) {

            arr.push(left.shift())
        } else {

            arr.push(right.shift())
        }
    }

    return [ ...arr, ...right, ...left ]
}


function mergeSort(array) {

    const half = array.length / 2

    if(array.length < 2){
        return array
    }
    const left = array.slice(0, half)
    const right = array.slice(half)

    return merge(mergeSort(left),mergeSort(right))
}

array = [3, 5, 1, 6, 9, 8, 2];
console.log(mergeSort(array));