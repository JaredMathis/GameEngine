import { color_white } from "./color_white.mjs";
import { element_button_width_full } from "./element_button_width_full.mjs";
import { element_style_standard } from "./element_style_standard.mjs";

export function element_button_standard(parent, button_text) {
    let e = element_button_width_full(parent, button_text);
    element_style_standard(e);
    e.style.color = color_white();
}

