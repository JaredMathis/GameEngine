import { button_back } from "./button_back.mjs";
import { element_input } from "./element_input.mjs";

export function component_new(parent, view) {
    let name = element_input(parent);
    name.focus();
    button_back(parent, view);
}
