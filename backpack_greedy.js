function fractionalKnapsack(items, capacity) { // greedy alg
    items.sort((a, b) => b.value / b.weight - a.ratio / a.weight);

    let totalValue = 0;
    let remainingCapacity = capacity;

    for (let i = 0; i < items.length; i++) {
        if (remainingCapacity <= 0)
            break;

        const currentItem = items[i];
        const fraction = Math
            .min(1, Math.floor(remainingCapacity / currentItem.weight));
        totalValue += fraction * currentItem.value;
        remainingCapacity -= fraction * currentItem.weight;
    }

    return totalValue
}

const items = [
    {weight:10, value:60},
    {weight:15, value:30},
    {weight:5, value:10},
];
const capacity = 20;
console.log(`Maximum value that can be obtained is`,
    fractionalKnapsack(items, capacity));

