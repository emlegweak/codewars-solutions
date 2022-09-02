//Building Strings From a Hash
function solution(pairs) {
    return Object.keys(pairs).map(value => {
        return `${value} = ${pairs[value]}`
    }).join(',')
}