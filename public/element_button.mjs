import { element } from "./element.mjs";

export function element_button(parent, button_text) {
    return element(parent, 'button', button_text);
}
