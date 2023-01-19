import { element_button_standard } from "./element_button_standard.mjs";
import { element_select } from "./element_select.mjs";
import { view_set } from "./view_set.mjs";

export function component_choice_multiple_generic(parent, view, choices, on_choose, next_screen) {
    let select = element_select(parent, choices);
    element_button_standard(parent, 'Choose', () => {
        on_choose(select.value);
        view_set(view, next_screen);
    });
    select.focus();
    return select;
}
