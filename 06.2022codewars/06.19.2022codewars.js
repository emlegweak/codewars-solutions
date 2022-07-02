//Enumerable Magic #4 - True for None?
function none(arr, fun) {
    return !arr.some(fun)
}