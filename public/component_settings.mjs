import { view_set } from "./view_set.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { local_storage_key_settings_font_size } from "./local_storage_key_settings_font_size.mjs";
import { number_max } from "./number_max.mjs";
import { local_storage_set } from "./local_storage_set.mjs";

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
                current = number_max(current, 5);
                return current;
            });
            console.log('here')
            view.refresh();
        });
}


