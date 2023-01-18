import { assert } from "./assert.mjs";
import { button_back } from "./button_back.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_disable } from "./element_disable.mjs";
import { element_input } from "./element_input.mjs";
import { field_values_get } from "./field_values_get.mjs";
import { local_storage_object_get } from "./local_storage_object_get.mjs";
import { local_storage_object_set } from "./local_storage_object_set.mjs";
import { property_get } from "./property_get.mjs";

export function component_edit(fields, prefix, id_initial) {
    return function (parent, view) {
        let initial_values = {};
        let stored = local_storage_object_get(prefix + id_initial);
        if (stored) {
            initial_values = stored;
        }
        if (id_initial) {
            initial_values.name = id_initial;
        }
        
        let first = true;
        let field_controls = {};
        for (let field of fields) {
            assert(field.type === 'string');
            assert(fields
                .filter(f => f.id === field.id)
                .length === 1);
            let f = element_input(parent, field.name);
            if (first) {
                first = false;
                if (!initial_values) {
                    f.focus();
                }
            }
            field_controls[field.id] = f;
            if (initial_values) {
                if (initial_values.hasOwnProperty(field.id)) {
                    f.value = initial_values[field.id];
                }
            }
            if (field.id === 'name') {
                if (id_initial) {
                    element_disable(f);
                }
            }
        }
        element_button_standard(parent, 'Save', on_save);
        button_back(parent, view);
        
        function on_save() {
            on_save(field_controls, prefix, view);
        }
    }
}



function on_save(field_controls, prefix, view) {
    let field_values = field_values_get(field_controls);
    let key = prefix + property_get(field_values, 'name');
    local_storage_object_set(
        key,
        o => field_values
    );
    view.pop();
}

