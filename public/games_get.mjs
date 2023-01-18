import { game_prefix } from "./game_prefix.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";

export function games_get() {
    const prefix = game_prefix();
    return local_storage_entities_get(prefix);
}

