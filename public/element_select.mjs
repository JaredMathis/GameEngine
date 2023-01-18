import { element } from "./element.mjs";
import { element_style_form } from "./element_style_form.mjs";

export function element_select(parent, choices) {
    let s = element(parent, 'select');
    element_style_form(s);
    for (let choice of choices) {
        let o = element(s, 'option', choice);
        o.value = choice;
    }
    return s;
}
