//Check same case

function sameCase(a, b) {
    if (/^[a-z]/.test(a) && /^[a-z]/.test(b) || /^[A-Z]/.test(a) && /^[A-Z]/.test(b)) {
        return 1;
    } else if (/^[a-zA-Z]/.test(a) && !/^[a-zA-Z]/.test(b) || !/^[a-zA-Z]/.test(a) && /^[a-zA-Z]/.test(b) || (!/^[a-zA-Z]/.test(a) && !/^[a-zA-Z]/.test(b))) {
        return -1;
    } else if (/^[a-z]/.test(a) && /^[A-Z]/.test(b) || /^[A-Z]/.test(a) && /^[a-z]/.test(b)) {
        return 0;
    }
}