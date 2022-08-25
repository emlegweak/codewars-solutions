//Nickname Generator
function nicknameGenerator(name) {
    if (name.length < 4) {
        return 'Error: Name too short'
    } else if (name.charAt(2) === 'a' || name.charAt(2) === 'e' || name.charAt(2) === 'i' || name.charAt(2) === 'o' || name.charAt(2) === 'u') {
        return name.slice(0, 4)
    } else {
        return name.slice(0, 3)
    }
}