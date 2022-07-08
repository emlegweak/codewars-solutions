//Implement Array.prototype.filter()

Array.prototype.filter = function (func) {
    //nothing here, you will feel pretty awesome to write down by yourself
    //have fun :)
    const array = []
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            array.push(this[i])
        }
    }
    return array
}
