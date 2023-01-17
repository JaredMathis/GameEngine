import { button_back } from "./button_back.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_input } from "./element_input.mjs";
import { game_prefix } from "./game_prefix.mjs";
import { local_storage_set } from "./local_storage_set.mjs";
import { values_for_each } from "./values_for_each.mjs";

export function component_new(parent, view) {
    let name = element_input(parent, 'Name of Game');
    name.focus();
    element_button_standard(parent, 'Create', () => {
        let key = game_prefix() + name.value;
        local_storage_object_set(key, o => {
            default_values(o, {
                name: name.value
            });
        });
        view.pop();
    });
    button_back(parent, view);
}

function default_values(object, defaults) {
    let for_each = (value, key) => {
        if (!object[key]) {
            object[key] = value;
        }
    }
    values_for_each(defaults, for_each);
}

function local_storage_object_set(key, transform) {
    local_storage_set(key, current => {
        current = current || "{}";
        current = JSON.parse(current);
        current = transform(current);
        return JSON.stringify(current);
    });
}

