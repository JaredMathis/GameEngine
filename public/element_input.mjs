import { element } from "./element.mjs";
import { element_style_container } from "./element_style_container.mjs";

export function element_input(parent) {
    let input = element(parent, 'input');
    element_style_container(input);
    input.style.padding = '0.7vh';
    return input;
}
