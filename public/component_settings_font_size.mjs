import { element_button_standard } from "./element_button_standard.mjs";
import { local_storage_key_settings_font_size } from "./local_storage_key_settings_font_size.mjs";
import { local_storage_set } from "./local_storage_set.mjs";
import { number_range_in } from "./number_range_in.mjs";
import { button_back } from "./button_back.mjs";

export function component_settings_font_size(parent, view) {
    button_back(parent, view);
    let factor = 1.05;
    let buttons = [{
        text: 'Larger',
        transform: x => x * factor,
    }, {
        text: 'Smaller',
        transform: x => x / factor,
    }];
    for (let button_ of buttons) {
        let button = button_;
        element_button_standard(
            parent, button.text, () => {
                console.log(button.text);
                const key = local_storage_key_settings_font_size();
                local_storage_set(key, function action(current) {
                    current = parseFloat(current) || 1;
                    current = button.transform(current);
                    current = number_range_in(current, 0.5, 5);
                    return current;
                });
                view.refresh();
            });
    }
}
