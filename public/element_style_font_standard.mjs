import { element_style_font_size_standard } from "./element_style_font_size_standard.mjs";

export function element_style_font_standard(e) {
    element_style_font_size_standard(e);
    e.style.fontFamily = 'Sans-Serif';
}
