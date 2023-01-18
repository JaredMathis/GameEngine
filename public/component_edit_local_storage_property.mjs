import { component_edit } from "./component_edit.mjs";
import { local_storage_object_prefixed_save } from "./local_storage_object_prefixed_save.mjs";

export function component_edit_local_storage_property(
    field_infos, prefix, stored, property_name, id) {
    return component_edit(
        field_infos,
        () => { 
            if (!stored[property_name]) {
                stored[property_name] = {};
            }
            return stored[property_name][id] || { name: id }
        },
        (value_new) => {
            stored[property_name][id] = value_new;
            local_storage_object_prefixed_save(
                prefix,
                stored);
        },
        true
    );
}
