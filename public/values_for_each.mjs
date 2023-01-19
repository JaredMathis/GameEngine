export function values_for_each(object_with_keys, for_each) {
    for (let k in object_with_keys) {
        let o = object_with_keys[k];
        for_each(o, k);
    }
}
