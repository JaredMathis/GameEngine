import { values_for_each } from "./values_for_each.mjs";

export function default_values(object, defaults) {
    values_for_each(defaults, (value, key) => {
        if (!object[key]) {
            object[key] = value;
        }
        default_values(object[key], value);
    });
}
