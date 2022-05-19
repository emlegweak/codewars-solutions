//NBA full 48 minutes average

function pointsPer48(ppg, mpg) {
    return ppg === 0 || mpg === 0 ? 0 : Number((ppg * 48 / mpg).toFixed(1))
}