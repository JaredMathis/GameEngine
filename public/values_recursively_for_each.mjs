import { values_for_each } from "./values_for_each.mjs";

export function values_recursively_for_each(object, for_each, ancestors, except) {
    if (except) {
        if (except(object)) {
            return;
        }
    }
    if (!ancestors) {
        ancestors = [];
    }
    for_each(object, ancestors);
    ancestors.push(object);
    values_for_each(object, value => {
        if (typeof value === typeof {}) {
            values_recursively_for_each(
                value, for_each, ancestors, except);
        }
    });
    ancestors.pop();
}
