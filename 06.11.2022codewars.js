//Get the Middle Character

function getMiddle(s) {
    //Code goes here!
    let middleChar = Math.floor(s.length / 2)
    if (s.length % 2 == 0) {
        return s[middleChar - 1] + s[middleChar]
    } else {
        return s[middleChar]
    }
}