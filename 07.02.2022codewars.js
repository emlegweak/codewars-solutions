//Hello Happy Codevarrior!
class Warrior {
    constructor(warriorName) {
        this.newName = warriorName
    }

    name(warriorName) {
        if (warriorName) {
            this.newName = warriorName
        }
        return this.newName
    }
}

Warrior.prototype.toString = function () {
    return `Hi! my name's ${this.newName}`
}