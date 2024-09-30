// Ограничение O(n), по памяти нет
function sortTickets(tickets){
    const destinations = new Set();
    const map = {}

    const sortedTickets = [];

    for (let {from, to} of tickets) {
        map[from] = to;
        destinations.add(to);
    }

   let startPoint = null;
    for (const ticket of tickets) {
        if (!destinations.has(ticket.from)) {
            startPoint = ticket.from
        }
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