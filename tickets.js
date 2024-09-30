// Ограничение O(n), по памяти нет
function sortTickets(tickets){
    const reversedMap = {}
    const map = {}

    const sortedTickets = [];

    for (let {from, to} of tickets) {
        map[from] = to;
        reversedMap[to] = from
    }

    let startPoint = null;
    let direction = tickets[0].to;

    while(direction) {
        direction = reversedMap[direction]
        if (direction)
            startPoint = direction
    }

    let from = startPoint;
    while(from) {
        const to = map[from]
        if (to) {
            sortedTickets.push({
                from, to
            })
        }
        from = to;
    }

    return sortedTickets;
}

const tickets = [
    {
        from: 'Калининград', to: 'Челябинск',
    },
    {
        from: 'Пятигорск', to: 'Краснодар',
    },
    {
        from: 'Москва', to: 'Калининград',
    },
    {
        from: 'Краснодар', to: 'Москва',
    },
    {
        from: 'Челябинск', to: 'Астана',
    }
]

console.log(sortTickets(tickets));