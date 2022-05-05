//6kyu - Array.diff

function arrayDiff(a, b) {
    return a.filter((value) => !b.includes(value))
}