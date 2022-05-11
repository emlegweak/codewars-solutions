//8 kyu - Pillars
function pillars(num_pill, dist, width) {
    return num_pill == 1 ? 0 : ((num_pill - 2) * width) + ((100 * dist) * (num_pill - 1))
}