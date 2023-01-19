import { values_for_each } from "./values_for_each.mjs";

export function object_merge(a, b) {
    values_for_each(b, (value, key) => {
        a[key] = value;
    });
    return a;
}
