//Fix the bugs syntax - my first kata
function myFirstKata(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") return (a % b) + (b % a)
    return false
}