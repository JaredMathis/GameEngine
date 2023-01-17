import { element } from "./element.mjs";

export function element_button(parent, button_text, on_click) {
    let b = element(parent, 'button', button_text);
    return b;
}
