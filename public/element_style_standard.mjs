import { element_style_border_rounded } from "./element_style_border_rounded.mjs";
import { element_style_font_size_standard } from "./element_style_font_size_standard.mjs";
import { element_style_margin_y } from "./element_style_margin_y.mjs";

export function element_style_standard(e) {
    element_style_font_size_standard(e);
    element_style_border_rounded(e);
    element_style_margin_y(e, '0.3vh');
}

