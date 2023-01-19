import { component_choice_multiple } from "./component_choice_multiple.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";
import { local_storage_key_selected_get } from "./local_storage_key_selected_get.mjs";

export function component_open_local_storage(prefix, component_on_open) {
    return function (parent, view) {
        let choices = local_storage_entities_get(prefix)
            .map(k => k.substring(prefix.length));
        component_choice_multiple(
            parent, 
            choices, 
            local_storage_key_selected_get(prefix), 
            view, 
            component_on_open);
    }
}

