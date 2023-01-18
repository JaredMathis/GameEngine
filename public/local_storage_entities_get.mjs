export function local_storage_entities_get(prefix) {
    return Object
        .keys(localStorage)
        .filter(k => k.startsWith(prefix));
}
