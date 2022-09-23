//Training JS #29: methods of arrayObject---concat() and join()
function bigToSmall(arr) {
    //concatenate arrays
    let arrConcat = [].concat(...arr)
    //sort numbers in descending order
    let sortedArr = arrConcat.sort((a, b) => b - a)
    //separate numbers w/angle brackets
    let joinedArr = sortedArr.join('>')
    return joinedArr
}

//one line solution
function bigToSmallRefactored(arr){
    return [].concat(...arr).sort((a,b) => b-a).join('>')
}