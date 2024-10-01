function zeroOneKnapsack(items, capacity) {
    const n = items.length;
    const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (items[i-1].weight > w) {
                dp[i][w] = dp[i-1][w];
            } else {
                dp[i][w] = Math.max(
                    dp[i-1][w],
                    dp[i-1][w - items[i-1].weight] + items[i-1].value
                );
            }
        }
    }

    return dp[n][capacity];
}


const items = [
    {weight:10, value:60},
    {weight:15, value:70},
    {weight:12, value:40},
    {weight:6, value:30},
];
const capacity = 21;

console.log(zeroOneKnapsack(items, capacity))