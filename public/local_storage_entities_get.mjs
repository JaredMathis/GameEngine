export function local_storage_entity_keys_get(prefix) {
    return Object
        .keys(localStorage)
        .filter(k => k.startsWith(prefix));
}
