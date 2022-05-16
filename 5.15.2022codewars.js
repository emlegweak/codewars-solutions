function disemvowel(str) {
    for (let i = 0; i < str.length; i++) {
        return str.replace(/[aeiouAEIOU]/g, "")
    }
}
//sorry not sorry leon, regex makes this so much simpler