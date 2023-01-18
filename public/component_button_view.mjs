import { element_button_standard } from "./element_button_standard.mjs";
import { view_set_get } from "./view_set_get.mjs";

export function component_button_view(
    parent, view, button_text, on_click_component) {
    element_button_standard(
        parent,
        button_text,
        view_set_get(
            view,
            on_click_component));
}
