import { element_button_standard } from "./element_button_standard.mjs";
import { noop } from "./noop.mjs";

export function component_main(parent, view) {
    element_button_standard(parent, 'New', noop);
    element_button_standard(parent, 'Open', noop);
    element_button_standard(parent, 'Settings', () => {
        view.set(component_settings);
    });
}

function component_settings(parent) {
    parent.innerHTML = 'here';
}

