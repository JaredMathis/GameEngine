export function local_storage_get(key_get, default_value) {
    let result = localStorage.getItem(key_get()) || default_value;
    return result;
}
