export function local_storage_set(key, action) {
    let current = localStorage
        .getItem(key);
    current = action(current);
    localStorage.setItem(key, current);
}
