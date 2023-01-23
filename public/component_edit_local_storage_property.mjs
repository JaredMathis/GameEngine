import { component_edit } from "./component_edit.mjs";
import { local_storage_object_prefixed_save } from "./local_storage_object_prefixed_save.mjs";
import { object_merge } from "./object_merge.mjs";

export function component_edit_local_storage_property(
    field_infos, prefix, root, entity, property_name, id, name_disabled) {
    return component_edit(
        field_infos,
        () => { 
            if (!entity[property_name]) {
                entity[property_name] = {};
            }
            let default_value = {};
            if (id) {
                default_value.name = id;
            }
            return entity[property_name][id] || default_value
        },
        (value_new) => {
            let merged = object_merge(
                entity[property_name][value_new.name] || {}, 
                value_new)
            entity[property_name][value_new.name] = merged;
            local_storage_object_prefixed_save(
                prefix,
                root);
        },
        name_disabled
    );
}
