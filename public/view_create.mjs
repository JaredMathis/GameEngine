import { element_clear } from "./element_clear.mjs";
import { element_div } from "./element_div.mjs";

export function view_create(parent) {
    let child = element_div(parent);
    return {
        set: function view_set(create) {
            element_clear(child);
            create(child);
        }
    };
}

