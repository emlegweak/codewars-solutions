//Age Range Compatibility Equation
function datingRange(age) {
    if (age <= 14) {
        let min = Math.floor(age - .10 * age)
        let max = Math.floor(age + .10 * age)
        return `${min}-${max}`
    } else {
        let minAge = Math.floor(age / 2 + 7)
        let maxAge = (age - 7) * 2
        return `${minAge}-${maxAge}`
    }
}