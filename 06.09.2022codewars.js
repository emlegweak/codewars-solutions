//detect panagram

function isPangram(string) {
    string = string.toLowerCase()
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every((s) => string.indexOf(s) !== -1)
}

