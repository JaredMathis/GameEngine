import { game_prefix } from "./game_prefix.mjs";

export function games_get() {
    const prefix = game_prefix();
    return local_storage_entities_get(prefix);
}
function local_storage_entities_get(prefix) {
    return Object
        .keys(localStorage)
        .filter(k => k.startsWith(prefix));
}

