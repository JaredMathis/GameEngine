import { list_single } from "./list_single.mjs";
import { game_objects_by_tag_get } from "./game_objects_by_tag_get.mjs";

export function game_object_by_tag_get(game_objects, tags, tag) {
    return list_single(game_objects_by_tag_get(game_objects, tags, tag));
}
