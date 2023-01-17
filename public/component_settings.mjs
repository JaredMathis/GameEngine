import { view_set } from "./view_set.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { local_storage_key_settings_font_size } from "./local_storage_key_settings_font_size.mjs";

export function component_settings(parent, view) {
    element_button_standard(
        parent, 'Font Size', view_set(view, component_settings_font_size));
}

function component_settings_font_size(parent, view) {
    element_button_standard(
        parent, 'Larger', () => {
            const key = local_storage_key_settings_font_size();
            local_storage_set(key, function action(current) {
                current = parseFloat(current) || 1;
                current *= 1.1;
                if (current >= 5) {
                    current = 5;
                }
                return current;
            });
            console.log('here')
            view.refresh();
        });
}

function local_storage_set(key, action) {
    let current = localStorage
        .getItem(key);
    current = action(current);
    localStorage.setItem(key, current);
}


