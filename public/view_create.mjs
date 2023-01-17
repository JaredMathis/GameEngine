import { element_clear } from "./element_clear.mjs";
import { element_div } from "./element_div.mjs";

export function view_create(parent) {
    let container = element_div(parent);
    let child;
    let most_recent;
    let result = {
        set: function view_set(create) {
            most_recent = create;
            if (child) {
                child.remove();
            }
            child = element_div(container);
            create(child);
        },
        refresh: function view_refresh() {
            result.set(most_recent);
        }
    };
    return result
}

