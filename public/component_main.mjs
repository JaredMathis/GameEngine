import { element_button_width_full } from "./element_button_width_full.mjs";

export function component_main(parent) {
    const button_text = 'New';
    let e = element_button_width_full(parent, button_text);
    element_font_size_standard(e);
    e.style.borderRadius = `2vh`
}


function element_font_size_standard(e) {
    e.style.fontSize = `4vh`;
}

