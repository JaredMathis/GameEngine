import { element } from "./element.mjs";
import { element_style_form } from "./element_style_form.mjs";

export function element_input(parent, placeholder) {
    let input = element(parent, 'input');
    input.placeholder = placeholder;
    element_style_form(input);
    return input;
}

