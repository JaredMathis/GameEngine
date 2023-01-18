import { button_back } from "./button_back.mjs";
import { default_values } from "./default_values.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_input } from "./element_input.mjs";
import { local_storage_object_set } from "./local_storage_object_set.mjs";
import { values_for_each } from "./values_for_each.mjs";

export function component_new(fields, key_get) {
    return function (parent, view) {
        let first = true;
        let field_controls = {
        };
        for (let field of fields) {
            assert(field.type === 'string');
            let f = element_input(parent, field.name);
            if (first) {
                first = false;
                f.focus();
            }
            field_controls[field.id] = f;
        }
        element_button_standard(parent, 'New', () => {
            let field_values = field_values_get(field_controls);
            let key = key_get(field_values);
            let {name} = field_values;
            local_storage_object_set(
                key, 
                o => default_values(o, {
                    name: name
                })
            );
            view.pop();
        });
        button_back(parent, view);
    }
}

function field_values_get(controls) {
    let result = {};
    values_for_each(controls, (value, key) => {
        result[key] = value.value;
    });
    console.log({result})
    return result;
}

function assert(b) {
    if (!b) {
        throw new Error('Assertion error');
    }
}


