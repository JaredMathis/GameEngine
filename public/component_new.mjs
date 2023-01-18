import { assert } from "./assert.mjs";
import { button_back } from "./button_back.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_input } from "./element_input.mjs";
import { field_values_get } from "./field_values_get.mjs";
import { local_storage_object_set } from "./local_storage_object_set.mjs";
import { property_get } from "./property_get.mjs";

export function component_new(fields, prefix, default_values, button_override) {
    return function (parent, view) {
        let first = true;
        let field_controls = {
        };
        for (let field of fields) {
            assert(field.type === 'string');
            assert(fields
                .filter(f => f.id === field.id)
                .length === 1);
            let f = element_input(parent, field.name);
            if (first) {
                first = false;
                if (!default_values) {
                    f.focus();
                }
            }
            field_controls[field.id] = f;
            if (default_values) {
                f.value = default_values[field.id];
            }
        }
        element_button_standard(parent, button_override || 'New', () => {
            let field_values = field_values_get(field_controls);
            let key = prefix + property_get(field_values, 'name');
            local_storage_object_set(
                key, 
                o => default_values(o, field_values)
            );
            view.pop();
        });
        button_back(parent, view);
    }
}


