import { element_button_width_full } from "./element_button_width_full.mjs";

export function component_main(parent) {
    const button_text = 'New';
    let e = element_button_width_full(parent, button_text);
    e.style.fontSize = `min(5vh)`
    e.style.borderRadius = `min(2vh)`
}


