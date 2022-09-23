//Strings, strings, strings (Easy)
// Recover toString() here :)

Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString = function () {
    return JSON.stringify(this)
}