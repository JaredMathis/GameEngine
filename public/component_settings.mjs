import { view_set } from "./view_set.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { local_storage_key_settings_font_size } from "./local_storage_key_settings_font_size.mjs";
import { local_storage_set } from "./local_storage_set.mjs";
import { number_range_in } from "./number_range_in.mjs";

export function component_settings(parent, view) {
    element_button_standard(
        parent, 'Font Size', view_set(view, component_settings_font_size));
}

function component_settings_font_size(parent, view) {
    let buttons = [{
        text: 'Larger',
        factor: 1.1,
    }, {
        text: 'Smaller',
        factor: 0.9,
    }]
    for (let button of buttons) {
        element_button_standard(
            parent, button.text, () => {
                const key = local_storage_key_settings_font_size();
                local_storage_set(key, function action(current) {
                    current = parseFloat(current) || 1;
                    current *= button.factor;
                    current = number_range_in(current);
                    return current;
                });
                view.refresh();
            });
    }
}


