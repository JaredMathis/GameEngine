import { local_storage_object_set } from "./local_storage_object_set.mjs";
import { property_get } from "./property_get.mjs";

export function local_storage_object_prefixed_save(prefix, value_new) {
    let key = prefix + property_get(value_new, 'name');
    local_storage_object_set(
        key,
        () => value_new
    );
}
