//printer errors
function printerError(s) {
    const invalidChars = [...s]
    .map(s=> s.charCodeAt(0))
    .filter(charCode => charCode < 97 || charCode > 109)
    return `${invalidChars.length}/${s.length}`
}