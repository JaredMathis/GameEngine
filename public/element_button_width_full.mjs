import { element_button } from "./element_button.mjs";
import { element_style_width_full } from "./element_style_width_full.mjs";

export function element_button_width_full(parent, button_text, on_click) {
    let e = element_button(parent, button_text, on_click);
    element_style_width_full(e);
    return e;
}
