const limits = {
    5000: 5,
    2000: 3,
    1000: 5,
    500: 5,
    100: 5,
    50: 6,
    10: 4,
};

function atm(sum, limits) {
    const maxAvailableSum = Object.entries(limits).reduce(
        (acc, [note, count]) => acc + +note * count,
        0,
    );

    if (sum > maxAvailableSum) throw new Error(`Sum ${sum} can not be given`);

    if (sum < 0) throw new Error("Sum can not be less 0");

    const options = Object.fromEntries(
        Object.entries(limits).map(([note, _]) => [note, 0]),
    );

    function addOperation(options, note) {
        if (note in options) {
            options[note] += 1;
        } else {
            options[note] = 1;
        }
    }

    function atmPrivate(sumLeft, limits, options) {
        const notes = Object.entries(limits)
            .filter(([note, count]) => count !== 0)
            .map(([note, _]) => note)
            .sort((a, b) => +b - +a);

        for (const note of notes) {
            if (sumLeft - +note === 0) {
                const copyOptions = { ...options };

                addOperation(copyOptions, note);
                return {
                    options: copyOptions,
                    limits: { ...limits, [note]: limits[note] - 1 },
                };
            } else if (sumLeft - +note > 0) {
                const copyOptions = { ...options };

                addOperation(copyOptions, note);
                const res = atmPrivate(
                    sumLeft - +note,
                    { ...limits, [note]: limits[note] - 1 > 0 ? limits[note] - 1 : 0 },
                    copyOptions,
                );

                if (res) return res;
            }
        }
    }

    const { options: noteList, limits: newLimits } = atmPrivate(
        sum,
        limits,
        options,
    );

    if (!noteList) {
        throw new Error(`Sum ${sum} can not be given`);
    }

    Object.keys(limits).forEach((key) => {
        limits[key] = newLimits[key];
    });
    return noteList;
}

console.assert(
    JSON.stringify(
        atm(1000, { 5000: 5, 2000: 3, 1000: 5, 500: 5, 100: 5, 50: 6, 10: 4 }),
    ) ===
    JSON.stringify({ 10: 0, 50: 0, 100: 0, 500: 0, 1000: 1, 2000: 0, 5000: 0 }),
    "Test 1 Failed: Expected { '10': 0, '50': 0, '100': 0, '500': 0, '1000': 1, '2000': 0, '5000': 0 }",
);

// Test 2: Withdraw multiple notes
console.assert(
    JSON.stringify(
        atm(1500, { 5000: 5, 2000: 3, 1000: 5, 500: 5, 100: 5, 50: 6, 10: 4 }),
    ) ===
    JSON.stringify({ 10: 0, 50: 0, 100: 0, 500: 1, 1000: 1, 2000: 0, 5000: 0 }),
    "Test 2 Failed: Expected { '10': 0, '50': 0, '100': 0, '500': 1, '1000': 1, '2000': 0, '5000': 0 }",
);

// Test 3: Sum not available due to limits
try {
    atm(10000, { 5000: 1, 2000: 1, 1000: 1, 500: 1, 100: 1, 50: 1, 10: 1 });
    console.assert(false, "Test 3 Failed: Expected Error");
} catch (e) {
    console.assert(
        e.message === "Sum 10000 can not be given",
        "Test 3 Failed: Incorrect error message",
    );
}

// Test 4: Withdraw with different denominations
console.assert(
    JSON.stringify(
        atm(570, { 5000: 5, 2000: 3, 1000: 5, 500: 5, 100: 5, 50: 6, 10: 4 }),
    ) ===
    JSON.stringify({ 10: 2, 50: 1, 100: 0, 500: 1, 1000: 0, 2000: 0, 5000: 0 }),
    "Test 4 Failed: Expected { '10': 2, '50': 1, '100': 0, '500': 1, '1000': 0, '2000': 0, '5000': 0 }",
);

// Test 5: Negative sum should throw an error
try {
    atm(-500, { 5000: 5, 2000: 3, 1000: 5, 500: 5, 100: 5, 50: 6, 10: 4 });
    console.assert(false, "Test 5 Failed: Expected Error");
} catch (e) {
    console.assert(
        e.message === "Sum can not be less 0",
        "Test 5 Failed: Incorrect error message",
    );
}

// Test 6: Withdraw sum that exceeds the ATM limit
try {
    atm(20000, { 5000: 1, 2000: 1, 1000: 1, 500: 1, 100: 1, 50: 1, 10: 1 });
    console.assert(false, "Test 6 Failed: Expected Error");
} catch (e) {
    console.assert(
        e.message === "Sum 20000 can not be given",
        "Test 6 Failed: Incorrect error message",
    );
}

// Test 7: All notes must be used
try {
    atm(8170, { 5000: 1, 2000: 1, 1000: 1, 500: 1, 100: 1, 50: 1, 10: 2 });
    console.assert(false, "Test 6 Failed: Expected Error");
} catch (e) {
    console.assert(
        e.message === "Sum 20000 can not be given",
        "Test 6 Failed: Incorrect error message",
    );
}
