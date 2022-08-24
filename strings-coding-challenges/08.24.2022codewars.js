//Split Strings
function solution(str) {
    //convert string to array
    let array = str.split('')
    //create an array for the result
    let result = []
    //iterate through the array every 2 elements
    for (let i = 0; i < array.length; i += 2) {
        //if the current element has another element next to it
        if (array[i + 1]) {
            //push the current and following element into the result array
            result.push(array[i] + array[i + 1])
        } else {
            //push the current element plus an underscore into the result array
            result.push(array[i] + '_')
        }
    }
    //return the result array
    return result
}