import { game_prefix } from "./game_prefix.mjs";
import { local_storage_entity_keys_get } from "./local_storage_entity_keys_get.mjs";

export function games_get() {
    const prefix = game_prefix();
    return local_storage_entity_keys_get(prefix);
}

