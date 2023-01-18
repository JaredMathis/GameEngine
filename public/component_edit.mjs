import { assert } from "./assert.mjs";
import { button_back } from "./button_back.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_disable } from "./element_disable.mjs";
import { element_input } from "./element_input.mjs";
import { field_values_get } from "./field_values_get.mjs";

export function component_edit(fields, initial_values_get, on_save, disable_name) {
    return function (parent, view) {
        let initial_values = initial_values_get();
        
        let field_controls = {};
        for (let field of fields) {
            assert(field.type === 'string');
            assert(fields
                .filter(f => f.id === field.id)
                .length === 1);
            let f = element_input(parent, field.name);
            field_controls[field.id] = f;
            if (initial_values) {
                if (initial_values.hasOwnProperty(field.id)) {
                    f.value = initial_values[field.id];
                }
            }
            if (field.id === 'name') {
                if (disable_name) {
                    element_disable(f);
                } else {
                    f.focus();
                }
            }
        }
        element_button_standard(
            parent, 'Save',
            () => {
                let field_values = field_values_get(field_controls);
                on_save(field_values);
                view.pop();
            });
        button_back(parent, view);
    }
}


