import { color_white } from "./color_white.mjs";
import { element_style_container } from "./element_style_container.mjs";
import { element_style_margin_y } from "./element_style_margin_y.mjs";

export function element_style_standard(e) {
    element_style_container(e);
    e.style.color = color_white();
    element_style_margin_y(e, '0.3vh');
}



