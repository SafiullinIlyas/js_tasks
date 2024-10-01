const graph = {
    A: [{
        value: "B",
        weight: 10,
    }, {
        value: "D",
        weight: 23,
    }],
    B: [{
        value: "C",
        weight: 15,
    }, {
        value: "N",
        weight: 12, // предполагаем, что N не имеет веса
    }, {
        value: "Z",
        weight: 32, // предполагаем, что Z не имеет веса
    }],
    D: [{
        value: "E",
        weight: 41, // предполагаем, что E не имеет веса
    }, {
        value: "F",
        weight: 12, // предполагаем, что F не имеет веса
    }, {
        value: "S",
        weight: 32, // предполагаем, что S не имеет веса
    }],
    F: [{
        value: "S",
        weight: 35, // предполагаем, что S не имеет веса
    }]
};

const graphOrig = {
    A: ["B", "D"],
    B: ["C", "N", "Z"],
    D: ["E","F", "S"],
    F: ["S"]
};
const startNode = 'A';
const endNode = 'S';

function findShortestWay(routes, startNode, endNode) {
    const attendedPoints = new Set();

    const temp =  ((function findWayRec(routes, curNode, endNode, weight = 0) {
        const destinations = routes[curNode]
        let result;

        if (curNode === endNode) {
            return {path: [curNode], length: weight}
        }

        Array.isArray(destinations) && destinations.forEach(dest => {
            if (attendedPoints.has(dest)) {
                return
            }
            const tempRes = findWayRec(routes, dest.value, endNode, dest.weight)

            if (tempRes && result) {
                result = tempRes.length < result.length ? tempRes : result
            }

            else if (tempRes) {
                result = tempRes
            }
        })



        attendedPoints.add(curNode)
        if (!result)
            return;

        result.path.push(curNode)
        result.length += weight;

        return result;
    })(routes, startNode, endNode))

    temp.path = temp.path.reverse().join(" => ")

    return temp
}

function findShortestWayStack(routes, startNode, endNode) {
    const stack = [startNode]
    const route = new Map();

    while (stack.length) {
        const node = stack.pop()

        const destinations = routes[node];

        if (!destinations) {
            continue;
        }

        const currentRoute = route.get(node);

        for (const dest of destinations) {
            if (!route.has(dest)) {
                stack.push(dest);
            }

            if(!route.has(dest)) {
                route.set(dest, node)
            }

            if (endNode === dest) {
                let tempNode = endNode;
                let length = 0;
                const res = []
                while(tempNode) {
                    res.push(tempNode);
                    tempNode = route.get(tempNode)
                    length++;
                }

                return {
                    path: res.reverse().join(" => "),
                    length
                }
            }
        }
    }

}


console.log(findShortestWay(graph, startNode, endNode));
console.log(findShortestWayStack(graphOrig, startNode, endNode));
