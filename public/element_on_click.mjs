import { element_on } from "./element_on.mjs";

export function element_on_click(button, on_click) {
    let event = 'click'
    element_on(button, event, on_click);
}


