var numJewelsInStones = function(jewels, stones) {
    const map = {}
    let count = 0
//loop through jewels and add them to map object
for(const jewel of jewels){
    map[jewel] = true
}
//loop through stones and see if any stones are jewels
for(const stone of stones){
    if(map[stone]){
        count++
    }
}
return count
};