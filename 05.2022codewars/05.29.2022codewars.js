//Count characters in your string
function count(string) {
    const chars = {}
    string.split('').map((x) => chars[x] = chars[x] + 1 || 1)
    return chars
}