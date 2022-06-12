//find the force of gravity between two objects

solution = ([mass1, mass2, distance], [unit1, unit2, distance2]) => {
    const G = 6.67e-11
    const conversions = {
        kg: 1,
        g: 1e-3,
        mg: 1e-6,
        μg: 1e-9,
        lb: .453592,
        m: 1,
        cm: 1e-2,
        mm: 1e-3,
        μm: 1e-6,
        ft: .3048
    }
    return G * mass1 * conversions[unit1] * mass2 * conversions[unit2] / (distance * conversions[distance2]) ** 2
}