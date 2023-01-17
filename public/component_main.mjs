import { element_button_standard } from "./element_button_standard.mjs";
import { noop } from "./noop.mjs";

export function component_main(parent) {
    element_button_standard(parent, 'New', noop);
    element_button_standard(parent, 'Open', noop);
    element_button_standard(parent, 'Settings', () => {
    });
}


