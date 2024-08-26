const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotate(source, flag = 90) {
    const matrixSize = source.length
    const newMatrix = Array(matrixSize)

   for (let i = 0; i < matrixSize; i++) {
       newMatrix[i] = Array(matrixSize)
   }



    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrixSize; j++) {
            switch (flag){
                case 90:  newMatrix[j][matrixSize - 1 - i] = source[i][j]; break;
                case 180: newMatrix[matrixSize - 1 - i][matrixSize - 1 - j] = source[i][j]; break;
                case 270: newMatrix[matrixSize - 1 - j][i] = source[i][j]; break;

            }

        }
    }

    return newMatrix
}

console.log(rotate(matrix, 90))