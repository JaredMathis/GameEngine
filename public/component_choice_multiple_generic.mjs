import { button_back } from "./button_back.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_select } from "./element_select.mjs";
import { view_set } from "./view_set.mjs";

export function component_choice_multiple_generic(parent, view, choices, on_choose, next_screen) {
    button_back(parent, view);
    let choose = element_select(parent, choices);
    element_button_standard(parent, 'Choose', () => {
        on_choose();
        view_set(view, next_screen);
    });
    choose.focus();
    return choose;
}
