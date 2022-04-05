//Training JS #32: methods of Math---round() ceil() and floor()

function roundIt(n) {
    let str = String(n);
    let num = str.split('.');
    if (num[0].length < num[1].length) {
        return parseInt(Math.ceil(n));
    } else if (num[0].length > num[1].length) {
        return parseInt(Math.floor(n));
    } else if (num[0].length === num[1].length) {
        return parseInt(Math.round(n));
    }
}