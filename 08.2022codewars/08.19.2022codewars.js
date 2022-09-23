//Contamination #1 -String-
function contamination(text, char) {
    if (text === "" || char === "") return ""
    return char.repeat(text.length)
}