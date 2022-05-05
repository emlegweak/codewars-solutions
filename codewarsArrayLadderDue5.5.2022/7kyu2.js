//7 kyu - Flatten and sort an array
"use strict";

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return array.reduce((acc, cur) => acc.concat(cur), []).sort((a, b) => a - b)
}