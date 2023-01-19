import { component_choice_multiple_generic } from "./component_choice_multiple_generic.mjs";

export function component_open_generic(entities_get, on_choose, on_remove, component_on_open) {
    return function (parent, view) {
        let choices = entities_get();

        component_choice_multiple_generic(
            parent, view, choices, on_choose, on_remove, component_on_open);
    };
}
