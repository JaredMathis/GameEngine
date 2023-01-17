import { view_set } from "./view_set.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { button_back } from "./button_back.mjs";
import { component_settings_font_size } from "./component_settings_font_size.mjs";

export function component_settings(parent, view) {
    element_button_standard(
        parent, 'Font Size', view_set(view, component_settings_font_size));
    button_back(parent, view);
}


