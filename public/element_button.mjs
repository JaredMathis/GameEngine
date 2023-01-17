import { element } from "./element.mjs";
import { element_on_click } from "./element_on_click.mjs";

export function element_button(parent, button_text, on_click) {
    let b = element(parent, 'button', button_text);
    element_on_click(parent, () => {
        console.log('clicked ' + button_text);
        on_click();
    });
    return b;
}
