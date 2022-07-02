//Who is going to pay for the wall?
function whoIsPaying(name) {
    if (name.length > 2) return Array(name, name.slice(0, 2))
    return Array(name)
}