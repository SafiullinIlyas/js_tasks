const findLargeSubstring = (str, test, ignoreCase = true) => {
    const subStrings = [];
    let largeSubStr = "";

    for (let i = 0; i < test.length; i++) {
        const left = test.slice(0, i);
        const right = test.slice(i);

        if (left)
            subStrings.push(left);
        if (right)
            subStrings.push(right);
    }

    const checkSubstring = (subStr) => {
        if (ignoreCase) {
            return str.toLowerCase().includes(subStr.toLowerCase());
        }
        return str.includes(subStr);
    };

    subStrings.forEach(subString => {
        if (checkSubstring(subString) && subString.length > largeSubStr.length) {
            largeSubStr = subString
        }
    })

    return largeSubStr
}