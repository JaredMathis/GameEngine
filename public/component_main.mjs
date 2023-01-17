import { element_button } from "./element_button.mjs";
import { element_style_width_full } from "./element_style_width_full.mjs";

export function component_main(parent) {
    const button_text = 'New';
    element_button_width_full(parent, button_text);
}

function element_button_width_full(parent, button_text) {
    let e = element_button(parent, button_text);
    element_style_width_full(e);
}

