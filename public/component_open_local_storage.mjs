import { component_open_generic } from "./component_open_generic.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";
import { local_storage_key_selected_get } from "./local_storage_key_selected_get.mjs";
import { local_storage_set } from "./local_storage_set.mjs";

export function component_open_local_storage(prefix, component_on_open) {
    return component_open_generic(entities_get, on_choose, on_remove, component_on_open)

    function entities_get() {
        return local_storage_entities_get(prefix)
            .map(k => k.substring(prefix.length));
    }
    
    function on_choose(value) {
        local_storage_set(
            local_storage_key_selected_get(prefix), 
            current => value);
    }

    function on_remove(value) {
        localStorage.removeItem(prefix + value);
    }
}


