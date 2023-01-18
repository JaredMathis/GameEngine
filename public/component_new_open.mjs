import { button_back } from "./button_back.mjs";
import { component_button_view } from "./component_button_view.mjs";
import { component_new } from "./component_new.mjs";
import { component_open } from "./component_open.mjs";
import { list_empty_not } from "./list_empty_not.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";
import { local_storage_key_selected_get } from "./local_storage_key_selected_get.mjs";

export function component_new_open(
    parent, view, prefix, fields, component_on_open) {
    component_button_view(
        parent,
        view,
        'New',
        component_new(fields, prefix)
    );
    let entities = local_storage_entities_get(prefix);
    if (list_empty_not(entities)) {
        component_button_view(
            parent, view, 'Open', component_open(
                prefix, 
                function component_opened(parent, view) {
                    button_back(parent, view);
                    const selected_key = localStorage
                        .getItem(local_storage_key_selected_get(prefix));
                    const selected = localStorage.getItem(prefix + selected_key);
                    const initial_values = JSON.parse(selected);
                    console.log({initial_values, selected_key});
                    component_button_view(
                        parent,
                        view,
                        'Edit',
                        component_new(
                            fields, 
                            prefix,
                            default_values)
                    );
                    component_on_open(parent, view);
                }));
    }
    button_back(parent, view);
}

