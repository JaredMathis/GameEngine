import { local_storage_object_get } from "./local_storage_object_get.mjs";
import { local_storage_object_set } from "./local_storage_object_set.mjs";
import { property_get } from "./property_get.mjs";
import { component_edit } from "./component_edit.mjs";

export function component_edit_local_storage(fields, prefix, id_initial) {
    return component_edit(fields, initial_values_get, on_save, !!id_initial);

    function initial_values_get() {
        let initial_values = {};
        let stored = local_storage_object_get(prefix + id_initial);
        if (stored) {
            initial_values = stored;
        }
        if (id_initial) {
            initial_values.name = id_initial;
        }
        return initial_values;
    }

    function on_save(field_values) {
        let key = prefix + property_get(field_values, 'name');
        local_storage_object_set(
            key,
            () => field_values
        );
    }

}
