export function local_storage_object_get(actual_key) {
    const selected = localStorage.getItem(actual_key);
    const stored = JSON.parse(selected);
    return stored;
}
