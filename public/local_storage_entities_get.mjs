import { local_storage_entity_keys_get } from "./local_storage_entity_keys_get.mjs";
import { local_storage_object_get } from "./local_storage_object_get.mjs";

export function local_storage_entities_get(prefix) {
    let keys = local_storage_entity_keys_get(prefix);
    let result = keys.map(key => local_storage_object_get(key));
    return result;
}
