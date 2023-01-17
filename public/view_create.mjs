import { element_div } from "./element_div.mjs";
import { list_last } from "./list_last.mjs";

export function view_create(parent) {
    let container = element_div(parent);
    let child;
    let stack = [];
    let most_recent;
    let result = {
        set: function view_set(create) {
            view_set_no_stack(create);
            stack.push(create);
        },
        refresh: function view_refresh() {
            view_set_no_stack(most_recent);
        },
        pop: function view_pop() {
            stack.pop();
            if (stack.length) {
                view_set_no_stack(list_last(stack));
            }
        }
    };
    return result

    function view_set_no_stack(create) {
        most_recent = create;
        if (child) {
            child.remove();
        }
        child = element_div(container);
        create(child);
    }
}


