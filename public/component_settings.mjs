import { button_back } from "./button_back.mjs";
import { component_settings_font_size } from "./component_settings_font_size.mjs";
import { component_button_view } from "./component_button_view.mjs";

export function component_settings(parent, view) {
    button_back(parent, view);
    component_button_view(
        parent,  view, 'Font Size', component_settings_font_size);
}


