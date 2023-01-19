import { game_object_tags_get } from "./game_object_tags_get.mjs";
import { list_single } from "./list_single.mjs";

export function tag_exists(tags_all, ancestors, game_object, tag) {
    let tags_for_value = game_object_tags_get(game_object, ancestors);
    if (tags_for_value.length) {
        let final = list_single(tags_for_value);
        if (final === tag) {
            return true;
        }
    }
    return false;
}
