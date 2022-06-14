//They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
function isOpposite(s1, s2) {
    if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) {
        return false
    }
    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) === s2.charAt(i)) {
            return false
        }
    }
    return true
}