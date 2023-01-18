import { values_for_each } from "./values_for_each.mjs";

export function field_values_get(controls) {
    let result = {};
    values_for_each(controls, (value, key) => {
        result[key] = value.value;
    });
    console.log({ result });
    return result;
}
