import { element_style_border_rounded } from "./element_style_border_rounded.mjs";
import { element_style_font_standard } from "./element_style_font_standard.mjs";
import { element_style_width_full } from "./element_style_width_full.mjs";

export function element_style_container(e) {
    element_style_font_standard(e);
    element_style_border_rounded(e);
    element_style_width_full(e);
}
