import { button_back } from "./button_back.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_input } from "./element_input.mjs";
import { game_prefix } from "./game_prefix.mjs";
import { local_storage_set } from "./local_storage_set.mjs";

export function component_new(parent, view) {
    let name = element_input(parent, 'Name of Game');
    name.focus();
    element_button_standard(parent, 'Create', () => {
        local_storage_set(() => game_prefix() + name.value, current => {
            current = current || { name: name.value }
            return current;
        })
        view.pop();
    });
    button_back(parent, view);
}

