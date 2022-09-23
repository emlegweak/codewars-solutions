//fix string case

function solve(s) {
    let upperCaseCount = 0
    let lowerCaseCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === s.charAt(i).toUpperCase()) {
            upperCaseCount += 1
        } else if (s.charAt(i) === s.charAt(i).toLowerCase()) {
            lowerCaseCount += 1
        }
    }
    if (upperCaseCount > lowerCaseCount) {
        return s.toUpperCase()
    } else if (lowerCaseCount > upperCaseCount) {
        return s.toLowerCase()
    } else {
        return s.toLowerCase()
    }
}