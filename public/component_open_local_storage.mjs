import { component_choice_multiple_generic } from "./component_choice_multiple_generic.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";
import { local_storage_key_selected_get } from "./local_storage_key_selected_get.mjs";
import { local_storage_set } from "./local_storage_set.mjs";

export function component_open_local_storage(prefix, component_on_open) {
    return function (parent, view) {
        let choices = entities_get();

        component_choice_multiple_generic(
            parent, view, choices, on_choose, component_on_open);
    }

    function entities_get() {
        return local_storage_entities_get(prefix)
            .map(k => k.substring(prefix.length));
    }
    
    function on_choose(value) {
        local_storage_set(
            local_storage_key_selected_get(prefix), 
            current => value);
    }
}

