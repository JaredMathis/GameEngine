import { element_div } from "./element_div.mjs";
import { list_last } from "./list_last.mjs";

export function view_create(parent) {
    let container = element_div(parent);
    let child;
    let stack = [];
    let most_recent;
    let result = {
        set: function view_set(create) {
            most_recent = create;
            if (child) {
                child.remove();
            }
            child = element_div(container);
            create(child);
            stack.push(create);
        },
        refresh: function view_refresh() {
            result.set(most_recent);
        },
        pop: function view_pop() {
            stack.pop();
            if (stack.length) {
                result.view_set(list_last(stack));
            }
        }
    };
    return result
}


