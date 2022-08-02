//counting duplicates

function duplicateCount(text) {
    return text.toLowerCase().split('').filter((element, index, array) => {
        return array.indexOf(element) !== index && array.lastIndexOf(element) === index
    }).length
}