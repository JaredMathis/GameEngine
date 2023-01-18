import { local_storage_set } from "./local_storage_set.mjs";

export function local_storage_object_set(key, transform) {
    local_storage_set(key, current => {
        current = current || "{}";
        try {
            current = JSON.parse(current);
        } catch (e) {
            throw new Error('invalid json in ' + key + ": " + current)
        }
        current = transform(current);
        let result = JSON.stringify(current);
        console.log({key,result})
        return result;
    });
}
