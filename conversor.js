function conversorCoulomb(type, value) {
    if (type === 'C') { return value; }
    if (type === 'mC') { return value * (Math.pow(10, (-3))); }
    if (type === 'µC') { return value * (Math.pow(10, (-6))); }
    if (type === 'nC') { return value * (Math.pow(10, (-9))); }
    if (type === 'pC') { return value * (Math.pow(10, (-12))); }
}

function conversorDistancia(type, value) {
    if (type === 'm') { return value; }
    if (type === 'cm') { return value * (Math.pow(10, (-2))); }
    if (type === 'mm') { return value * (Math.pow(10, (-3))); }
}
