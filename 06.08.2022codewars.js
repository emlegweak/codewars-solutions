//Coding Meetup #2 - Higher - Order Functions Series - Greet developers

function greetDevelopers(list) {
    list.forEach(value => value.greeting = `Hi ${value.firstName}, what do you like the most about ${value.language}?`)
    return list
}