//convert string to camel case
//sorry not sorry for using regex @leon, it made it so much easier D:
function toCamelCase(str) {
    const exp = /[-_]\w/ig
    //where [-_] matches all underscore and dash, \w matches any character after either dash or underscore, /ig performs global case insensitive serarch
    return str.replace(exp, (match) => {
        return match[1].toUpperCase()
    })
}