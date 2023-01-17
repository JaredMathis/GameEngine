import { element_style_background_color_standard } from "./element_style_background_color_standard.mjs";
import { element_style_standard } from "./element_style_standard.mjs";

export function document_body_style_set() {
    element_style_background_color_standard(document.body);
    element_style_standard(document.body);
}
