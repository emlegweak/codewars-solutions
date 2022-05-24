//validate code with simple regex
function validateCode(code) {
    return /\b[123]/g.test(code)
}
//sorry, Leon... it's just SO CONVENIENT