//Grasshopper - terminal game turn function
function doTurn() {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
}