const createCodesGenerator2 = (min, max) => {
    const hashTable = {}
    const numberLength = max.toString().length;

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }


    return () => {
        while (true){
            const code = generateRandomNumber(min, max).toString().padStart(numberLength, '0')

            if (!hashTable.hasOwnProperty(code)) {
                hashTable[code] = code
                console.log(hashTable)
                return code
            }
        }
    }
}


const createCodesGenerator = (min, max) => {
    const numberLength = max.toString().length;
    let currentIndex = -1;
    const hashTable = Array.from({length: (max - min + 1)}, (_, index) => (min + index).toString().padStart(numberLength, '0'))
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
    }

    shuffle(hashTable)

    return () => {
        currentIndex++



        return currentIndex < hashTable.length - 1 ? hashTable[currentIndex] : 'А все, хватит'
    }
}

const createCode = createCodesGenerator(1, 16);


for (let i = 0; i < 20; i++) {
    console.log(`${i + 1} ----> ${createCode()}`)
}

