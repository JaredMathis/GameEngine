import { element } from "./element.mjs";
import { element_html_inner } from "./element_html_inner.mjs";
import { element_style_font_size_small } from "./element_style_font_size_small.mjs";
import { element_style_form } from "./element_style_form.mjs";

export function element_input(parent, placeholder) {
    let label = element(parent, 'label');
    element_html_inner(label, placeholder);
    element_style_font_size_small(label);
    let input = element(parent, 'input');
    input.placeholder = placeholder;
    element_style_form(input);
    return input;
}

