import { element } from "./element.mjs";
import { element_style_container } from "./element_style_container.mjs";

export function element_input(parent, placeholder) {
    let input = element(parent, 'input');
    input.placeholder = placeholder;
    element_style_container(input);
    input.style.padding = '0.7vh';
    return input;
}
