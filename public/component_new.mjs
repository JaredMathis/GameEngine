import { button_back } from "./button_back.mjs";
import { element_input } from "./element_input.mjs";

export function component_new(parent, view) {
    element_input(parent);
    button_back(parent, view);
}
