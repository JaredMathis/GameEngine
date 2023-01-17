import { element_clear } from "./element_clear.mjs";
import { element_div } from "./element_div.mjs";

export function view_create(parent) {
    let child = element_div(parent);
    let most_recent;
    let result = {
        set: function view_set(create) {
            most_recent = create;
            element_clear(child);
            create(child);
        },
        refresh: function view_refresh() {
            result.set(most_recent);
        }
    };
    return result
}

