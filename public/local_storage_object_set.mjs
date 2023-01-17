import { local_storage_set } from "./local_storage_set.mjs";

export function local_storage_object_set(key, transform) {
    local_storage_set(key, current => {
        current = current || "{}";
        current = JSON.parse(current);
        current = transform(current);
        return JSON.stringify(current);
    });
}
