import { button_back } from "./button_back.mjs";
import { component_settings } from "./component_settings.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_input } from "./element_input.mjs";
import { noop } from "./noop.mjs";
import { view_set } from "./view_set.mjs";

export function component_main(parent, view) {
    element_button_standard(
        parent, 'New', view_set(view, component_new));
    element_button_standard(
        parent, 'Open', noop);
    element_button_standard(
        parent, 'Settings', view_set(view, component_settings));
}

function component_new(parent, view) {
    element_input(parent);
    button_back(parent, view);
}




