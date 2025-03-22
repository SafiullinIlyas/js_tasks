const csvParser = (str) => {
    const array = str.split('\n')

    if (!array.length) {
        return []
    }

    const getElements = (str) => {
        return str.split(',')
    }

    const mapFields = getElements(array[0])

    const result = []

    const getObject = (elements) => {
        // if (mapFields.length !== elements.length) return null

        return mapFields.reduce((acc, cur, index)=>{
                acc[cur] = elements[index]

                return acc
        },{})
    }

    try {
        for (let i = 1; i < array.length; i++) {
            const str = array[i]
            const elements = getElements(str)
            const object = getObject(elements)

            if (object) {
                result.push(object)
            }
        }
    }
    catch(err) {
        return {
            error: err.message || 'something went wrong'
        }
    }

    return result
}


const str = `Title,Address,State,City
"Doe, John","Designer for
The Journal",325 Pine Street,,Seattle
"Green, Edward",Developer,110 Pike Street,WA,Seattle`

console.log(csvParser(str));