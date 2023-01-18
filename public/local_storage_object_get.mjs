export function local_storage_object_get(actual_key) {
    const selected = localStorage.getItem(actual_key);
    if (selected === null) {
        return null;
    }
    const stored = JSON.parse(selected);
    return stored;
}
