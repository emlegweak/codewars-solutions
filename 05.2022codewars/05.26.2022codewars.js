//Polish alphabet

function correctPolishLetters(string) {
    const diacritics = {
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ł": "l",
        "ń": "n",
        "ó": "o",
        "ś": "s",
        "ź": "z",
        "ż": "z"
    }
    return string.split('').map((x) => diacritics[x] || x).join('')
}