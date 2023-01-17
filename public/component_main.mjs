import { element_button_standard } from "./element_button_standard.mjs";
import { element_style_background_color_standard } from "./element_style_background_color_standard.mjs";
import { noop } from "./noop.mjs";

export function component_main(parent) {
    element_style_background_color_standard(parent);
    element_button_standard(parent, 'New', noop);
    element_button_standard(parent, 'Open', noop);
    element_button_standard(parent, 'Settings', () => {
    });
}


