import { color_blue_light } from "./color_blue_light.mjs";
import { color_blue_standard } from "./color_blue_standard.mjs";
import { element_button } from "./element_button.mjs";
import { element_style_standard } from "./element_style_standard.mjs";

export function element_button_standard(parent, button_text, on_click) {
    let e = element_button(parent, button_text, on_click);
    element_style_standard(e);
    e.style.border = `0.3vh solid ${color_blue_light()}`;
    e.style.background = color_blue_standard();
}


