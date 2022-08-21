//calculate price excluding VAT
//return price without vat
function excludingVatPrice(price) {
    if (price === null) return -1
    return Number((price / 1.15).toFixed(2))
}