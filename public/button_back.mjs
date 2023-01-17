import { element_button_standard } from "./element_button_standard.mjs";

export function button_back(parent, view) {
    element_button_standard(parent, 'Back', () => view.pop());
}
