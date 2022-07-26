//character frequency
function charFreq(message) {
    // awesome counter code
    let freq = {}
        message.split('').forEach((char) => {
            freq[char] ? freq[char]++ : freq[char] = 1
    })
    return freq
}
