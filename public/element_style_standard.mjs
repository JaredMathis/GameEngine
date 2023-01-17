import { element_style_border_rounded } from "./element_style_border_rounded.mjs";
import { element_style_font_size_standard } from "./element_style_font_size_standard.mjs";

export function element_style_standard(e) {
    element_style_font_size_standard(e);
    element_style_border_rounded(e);
    let value = '0.3vh';
    element_style_margin_y(e, value);
}
function element_style_margin_y(e, value) {
    e.style.marginTop = value;
    e.style.marginBottom = value;
}

