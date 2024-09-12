/*

    obj1 = {
        foo : 'foo',
        bar: 'bar'
    }

    obj2 = {
        bar: 'foo',
        some: 'some,
    }

    res = {
        foo: 'foo',
        bar: 'foo',
    }

    update value obj1 with obj2

 */

const updateKeys = (obj1, obj2) => {
    const keys2 = Object.keys(obj2);

    Object.entries(obj1).forEach(([key, value]) => {
        if (keys2.includes(key)) {
            obj1[key] = obj2[key];
        }
    });
}

const updateKeysImmutable = (obj1, obj2) => {
    const keys2 = Object.keys(obj2);
    const res = {}

    Object.entries(obj1).forEach(([key, value]) => {
        if (keys2.includes(key)) {
            res[key] = obj2[key];
        }
        else {
            res[key] = obj1[key]
        }
    });

    return res

}

obj1 = {
    foo : 'foo',
    bar: 'bar',
}

obj2 = {
    bar: 'foo',
    some: 'some',
}
console.log(updateKeysImmutable(obj1, obj2));
