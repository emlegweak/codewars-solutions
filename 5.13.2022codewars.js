//Did she say hallo?
const howdyDoodleDoo = {
    hello: 'english',
    ciao: 'italian',
    salut: 'french',
    hallo: 'german',
    hola: 'spanish',
    ahoj: 'czech republic',
    czesc: 'polish',
}
function validateHello(greetings) {
    for (key in howdyDoodleDoo) {
        if (greetings.toLowerCase().includes(key)) {
            return true
        }
    }
    return false
}