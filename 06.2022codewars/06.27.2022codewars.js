//growth of a population
nbYear = (p0, p100, aug, target) => {
    const rate = p100 / 100 + 1;
    let n, pop;
    for (n = 0, pop = p0; pop < target; n++) {
        pop = ~~(pop * rate + aug);
    }
    return n;
}