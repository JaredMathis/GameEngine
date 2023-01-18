import { button_back } from "./button_back.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_select } from "./element_select.mjs";
import { local_storage_set } from "./local_storage_set.mjs";
import { view_set } from "./view_set.mjs";

export function component_choice_multiple(parent, choices, local_storage_key, view, next_screen) {
    button_back(parent, view);
    let choose = element_select(parent, choices);
    element_button_standard(parent, 'Choose', () => {
        local_storage_set(local_storage_key, current => choose.value);
        view_set(view, next_screen);
    });
    choose.focus();
}
