export function values_for_each(defaults, for_each) {
    for (let k in defaults) {
        let o = defaults[k];
        for_each(o, k);
    }
}
