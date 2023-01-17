import { element_div } from "./element_div.mjs";

function view_create(parent) {
    let child = element_div(parent);
    return {
        set: function view_set(create) {
            element_clear(child);
            create(child);
        }
    };
}
