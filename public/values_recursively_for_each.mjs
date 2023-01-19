import { values_for_each } from "./values_for_each.mjs";

export function values_recursively_for_each(object, for_each, ancestors, except) {
    if (!ancestors) {
        ancestors = [];
    }
    ancestors.push(object);
    values_for_each(object, value => {
        if (except) {
            if (except(value)) {
                return;
            }
        }
        for_each(value, ancestors);
        if (typeof value === typeof {}) {
            values_recursively_for_each(value, for_each, ancestors);
        }
    });
    ancestors.pop();
}
