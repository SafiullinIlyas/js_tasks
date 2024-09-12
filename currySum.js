/*
    func sum(a)(b)(c)....(e)

    logs:
    a
    a+b
    a+b+c
    ...
    a+b+c+....e


 */

const sum = (num) => {
    console.log(num)

    return (newNum) => sum(num + newNum)
}
