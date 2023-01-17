import { element_button_width_full } from "./element_button_width_full.mjs";
import { element_style_standard } from "./element_style_standard.mjs";

export function component_main(parent) {
    const button_text = 'New';
    let e = element_button_width_full(parent, button_text);
    element_style_standard(e);
}





