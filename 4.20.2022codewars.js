//Array Array Array

const numberValue = value => typeof value === 'number'
const stringValue = value => typeof value === 'string'

const explode = x => {

    let score = 'Void!'
    const [firstValue, secondValue] = x

    if (numberValue(firstValue) && numberValue(secondValue)) {
        score = firstValue + secondValue
    } else if (numberValue(firstValue)) {
        score = firstValue
    } else if (numberValue(secondValue)) {
        score = secondValue
    }

    return stringValue(score) ? score : Array.from({ length: score }, () => x)
}